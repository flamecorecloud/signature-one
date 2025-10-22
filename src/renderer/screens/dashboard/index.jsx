import React from "react";
import AppScreen from "./app"

export default function Dashboard({ user = null, role = null }) {
    return (
        <AppScreen user={user} role={role}/>
    );
}
