# Backend - Futsal Sparring

## Database (Supabase)

Gunakan SQL berikut di Supabase SQL Editor untuk membuat struktur tabel:

```sql
-- 1. USERS
create table users (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  name text not null,
  created_at timestamp default now()
);

-- 2. TEAMS
create table teams (
    id uuid primary key default gen_random_uuid(),
    name varchar(100) not null,
    city varchar(100),
    logo_url text,
    created_by uuid not null references users(id) on delete cascade,
    created_at timestamp with time zone default now()
);

-- 3. TEAM_MEMBERS
create table team_members (
    id uuid primary key default gen_random_uuid(),
    team_id uuid not null references teams(id) on delete cascade,
    user_id uuid not null references users(id) on delete cascade,
    role text check (role in ('captain', 'member')) default 'member',
    joined_at timestamp with time zone default now(),
    unique(team_id, user_id)
);

-- 4. SPARRING_REQUESTS
create table sparring_requests (
    id uuid primary key default gen_random_uuid(),
    from_team_id uuid not null references teams(id) on delete cascade,
    to_team_id uuid not null references teams(id) on delete cascade,
    status text check (status in ('pending', 'accepted', 'rejected', 'canceled')) default 'pending',
    match_date date,
    location varchar(200),
    notes text,
    created_at timestamp with time zone default now()
);

-- 5. NOTIFICATIONS (opsional)
create table notifications (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references users(id) on delete cascade,
    message text not null,
    is_read boolean default false,
    created_at timestamp with time zone default now()
);
```

## Langkah Setup

1. Buat project di [Supabase](https://app.supabase.com).
2. Masukkan SQL di atas ke SQL Editor Supabase.
3. Ambil `Project URL` dan `anon public key` dari menu Project Settings → API.
4. Masukkan ke file `.env` dan ke `frontend/main.js`.

## Catatan

- Semua backend (auth, database) menggunakan Supabase.
- Tidak perlu backend custom untuk MVP.
