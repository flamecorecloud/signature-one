export function getCreateFields(authUser) {
    return {
        status: 'active', // inactive
        platform: 'web', // mobile, desktop
        version: 1,
        note: null,
        server: 1,
        source: 'system', // manual
        tags: [],
        meta: {},
        attributes: {},
        external_id: null,
        priority: 0,
        sync_status: null, // pending, synced
        is_deleted: false,
        is_category: false,
        is_favorite: false,
        checksum: null,
        usage_count: 0,
        deleted_at: null,
        created_by: authUser?.email ?? 'system',
        updated_by: authUser?.email ?? 'system',
        created_at: new Date(),
        updated_at: new Date(),
        last_accessed_at : null
    };
}

export function getUpdateFields(authUser) {
    return {
        updated_by: authUser?.email ?? 'system',
        updated_at: new Date()
    };
}