import React, { useEffect, useState, useRef } from "react";

export default function Address({ data = {}, onData }) {
    const [negara, setNegara] = useState([]);
    const [provinsi, setProvinsi] = useState([]);
    const [kabupaten, setKabupaten] = useState([]);
    const [kecamatan, setKecamatan] = useState([]);
    const [desa, setDesa] = useState([]);

    const [selectedNegara, setSelectedNegara] = useState(data.negara || "");
    const [selectedProvinsi, setSelectedProvinsi] = useState(data.provinsi || "");
    const [selectedKabupaten, setSelectedKabupaten] = useState(data.kabupaten || "");
    const [selectedKecamatan, setSelectedKecamatan] = useState(data.kecamatan || "");
    const [selectedDesa, setSelectedDesa] = useState(data.desa || "");
    const [kodePos, setKodePos] = useState(data.kode_pos || "");

    const [alamat, setAlamat] = useState(data.alamat || "");
    const [koordinat, setKoordinat] = useState(data.kordinat || "");
    const [priority, setPriority] = useState(data.priority || "");

    // simpan callback onData di ref
    const onDataRef = useRef(onData);

    useEffect(() => {
        onDataRef.current = onData;
    }, [onData]);

    // kirim data ke parent tanpa leak
    useEffect(() => {
        onDataRef.current?.({
            negara: selectedNegara,
            provinsi: selectedProvinsi,
            kabupaten: selectedKabupaten,
            kecamatan: selectedKecamatan,
            desa: selectedDesa,
            kode_pos : kodePos,
            alamat,
            kordinat : koordinat,
            priority
        });
    }, [
        selectedNegara,
        selectedProvinsi,
        selectedKabupaten,
        selectedKecamatan,
        selectedDesa,
        kodePos,
        alamat,
        koordinat,
        priority,
    ]);

    // fetch negara
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,flags,cca2")
            .then((res) => res.json())
            .then((dataRes) => {
                const list = dataRes
                    .map((item) => ({
                        id: item.cca2,
                        name: item.name.common,
                        flag: item.flags?.png || item.flags?.svg,
                    }))
                    .sort((a, b) => a.name.localeCompare(b.name));
                setNegara(list);
            })
            .catch((err) => console.error("Error fetch negara:", err));
    }, []);

    // fetch provinsi
    useEffect(() => {
        if (selectedNegara === "ID") {
            fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
                .then((res) => res.json())
                .then((dataRes) => setProvinsi(dataRes))
                .catch((err) => console.error("Error fetch provinsi:", err));
        } else {
            setProvinsi([]);
            setKabupaten([]);
            setKecamatan([]);
            setDesa([]);
        }
    }, [selectedNegara]);

    // fetch kabupaten
    useEffect(() => {
        if (selectedProvinsi) {
            fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvinsi}.json`)
                .then((res) => res.json())
                .then((dataRes) => setKabupaten(dataRes))
                .catch((err) => console.error("Error fetch kabupaten:", err));
        }
    }, [selectedProvinsi]);

    // fetch kecamatan
    useEffect(() => {
        if (selectedKabupaten) {
            fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedKabupaten}.json`)
                .then((res) => res.json())
                .then((dataRes) => setKecamatan(dataRes))
                .catch((err) => console.error("Error fetch kecamatan:", err));
        }
    }, [selectedKabupaten]);

    // fetch desa
    useEffect(() => {
        if (selectedKecamatan) {
            fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedKecamatan}.json`)
                .then((res) => res.json())
                .then((dataRes) => setDesa(dataRes))
                .catch((err) => console.error("Error fetch desa:", err));
        }
    }, [selectedKecamatan]);

    // apply default data ketika ada props.data
    // useEffect(() => {
    //     if (data) {
    //         setSelectedNegara(data.negara || "");
    //         setSelectedProvinsi(data.provinsi || "");
    //         setSelectedKabupaten(data.kabupaten || "");
    //         setSelectedKecamatan(data.kecamatan || "");
    //         setSelectedDesa(data.desa || "");
    //         setKodePos(data.kodePos || "");
    //         setAlamat(data.alamat || "");
    //         setKoordinat(data.koordinat || "");
    //         setPriority(data.priority || "");
    //     }
    // }, [data]);

    // ambil koordinat dari device
    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const coords = `${pos.coords.latitude}, ${pos.coords.longitude}`;
                    setKoordinat(coords);
                },
                (err) => {
                    console.error("Error ambil lokasi:", err);
                    alert("Gagal mengambil lokasi. Pastikan izin lokasi aktif.");
                }
            );
        } else {
            alert("Browser tidak mendukung geolocation.");
        }
    };

    return (
        <div className="p-5 space-y-5 border rounded-xl">
            <h2 className="text-lg font-semibold">Alamat</h2>

            {/* Negara */}
            <div>
                <label className="block mb-1">Negara</label>
                <select
                    className="appearance-none w-full border p-2 rounded-lg"
                    value={selectedNegara}
                    onChange={(e) => setSelectedNegara(e.target.value)}
                >
                    <option value="">Pilih Negara</option>
                    {negara.map((n) => (
                        <option key={n.id} value={n.id}>
                            {n.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Provinsi */}
            {provinsi.length > 0 && (
                <div>
                    <label className="block mb-1">Provinsi</label>
                    <select
                        className="appearance-none w-full border p-2 rounded-lg"
                        value={selectedProvinsi}
                        onChange={(e) => setSelectedProvinsi(e.target.value)}
                    >
                        <option value="">Pilih Provinsi</option>
                        {provinsi.map((p) => (
                            <option key={p.id} value={p.id}>
                                {p.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Kabupaten */}
            {kabupaten.length > 0 && (
                <div>
                    <label className="block mb-1">Kabupaten</label>
                    <select
                        className="appearance-none w-full border p-2 rounded-lg"
                        value={selectedKabupaten}
                        onChange={(e) => setSelectedKabupaten(e.target.value)}
                    >
                        <option value="">Pilih Kabupaten</option>
                        {kabupaten.map((k) => (
                            <option key={k.id} value={k.id}>
                                {k.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Kecamatan */}
            {kecamatan.length > 0 && (
                <div>
                    <label className="block mb-1">Kecamatan</label>
                    <select
                        className="appearance-none w-full border p-2 rounded-lg"
                        value={selectedKecamatan}
                        onChange={(e) => setSelectedKecamatan(e.target.value)}
                    >
                        <option value="">Pilih Kecamatan</option>
                        {kecamatan.map((k) => (
                            <option key={k.id} value={k.id}>
                                {k.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Desa */}
            {desa.length > 0 && (
                <div>
                    <label className="block mb-1">Desa</label>
                    <select
                        className="appearance-none w-full border p-2 rounded-lg"
                        value={selectedDesa}
                        onChange={(e) => setSelectedDesa(e.target.value)}
                    >
                        <option value="">Pilih Desa</option>
                        {desa.map((d) => (
                            <option key={d.id} value={d.id}>
                                {d.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Kode Pos */}
            <div>
                <label className="block mb-1">Kode Pos</label>
                <input
                    type="text"
                    placeholder="Masukkan kode pos"
                    className="w-full border p-2 rounded-lg"
                    value={kodePos}
                    onChange={(e) => setKodePos(e.target.value)}
                />
            </div>

            {/* Alamat */}
            <div>
                <label className="block mb-1">Alamat Lengkap</label>
                <textarea
                    placeholder="Nama jalan, RT/RW, No Rumah..."
                    className="w-full border p-2 rounded-lg"
                    rows="3"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                />
            </div>

            {/* Koordinat */}
            <div>
                <label className="block mb-1">Koordinat</label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="-6.200000, 106.816666"
                        className="w-full border p-2 rounded-lg"
                        value={koordinat}
                        readOnly
                    />
                    <button
                        type="button"
                        className="cursor-pointer px-4 py-2 hover:bg-blue-500 bg-blue-600 text-white rounded-lg"
                        onClick={handleGetLocation}
                    >
                        Ambil
                    </button>
                </div>
            </div>

            {/* Priority */}
            <div>
                <label className="block mb-1">Priority</label>
                <input
                    type="number"
                    placeholder="Masukkan Priority"
                    className="w-full border p-2 rounded-lg"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                />
            </div>
        </div>
    );
}
