--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

-- Started on 2024-03-26 21:47:23

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 16535)
-- Name: stok_buku; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stok_buku (
    id integer NOT NULL,
    nama character varying(255),
    penerbit character varying(255),
    jenis character varying(255),
    genre character varying(255),
    pengarang character varying(255),
    ilustrator character varying(255),
    jumlah_masuk integer,
    jumlah_keluar integer,
    jumlah_sisa integer,
    created_at time without time zone,
    created_by integer,
    updated_at time without time zone,
    updated_by integer,
    kategori character varying(255)
);


ALTER TABLE public.stok_buku OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16534)
-- Name: stok_buku_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.stok_buku_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stok_buku_id_seq OWNER TO postgres;

--
-- TOC entry 3336 (class 0 OID 0)
-- Dependencies: 218
-- Name: stok_buku_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.stok_buku_id_seq OWNED BY public.stok_buku.id;


--
-- TOC entry 3184 (class 2604 OID 16538)
-- Name: stok_buku id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stok_buku ALTER COLUMN id SET DEFAULT nextval('public.stok_buku_id_seq'::regclass);


--
-- TOC entry 3330 (class 0 OID 16535)
-- Dependencies: 219
-- Data for Name: stok_buku; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.stok_buku (id, nama, penerbit, jenis, genre, pengarang, ilustrator, jumlah_masuk, jumlah_keluar, jumlah_sisa, created_at, created_by, updated_at, updated_by, kategori) VALUES (1, 'One Punch Man', 'Shueisa, Ltd', 'kmk', 'act', 'One', 'Yusuke Murata', 250, 0, 250, '20:14:07', 1, NULL, NULL, 'beli');
INSERT INTO public.stok_buku (id, nama, penerbit, jenis, genre, pengarang, ilustrator, jumlah_masuk, jumlah_keluar, jumlah_sisa, created_at, created_by, updated_at, updated_by, kategori) VALUES (2, 'One Punch Man', 'Shueisa, Ltd', 'kmk', 'act', 'One', 'Yusuke Murata', 70, 0, 320, '20:21:29', 1, NULL, NULL, 'beli');
INSERT INTO public.stok_buku (id, nama, penerbit, jenis, genre, pengarang, ilustrator, jumlah_masuk, jumlah_keluar, jumlah_sisa, created_at, created_by, updated_at, updated_by, kategori) VALUES (3, 'One Punch Man', 'Shueisa, Ltd', 'kmk', 'act', 'One', 'Yusuke Murata', 100, 0, 420, '20:22:02', 1, NULL, NULL, 'beli');
INSERT INTO public.stok_buku (id, nama, penerbit, jenis, genre, pengarang, ilustrator, jumlah_masuk, jumlah_keluar, jumlah_sisa, created_at, created_by, updated_at, updated_by, kategori) VALUES (4, 'Gusdur, Presiden RI ke 4', 'PT Percetakan Angin Ribut', 'bio', 'rom', 'Yenni Wahid', '', 8, 0, 8, '20:24:45', 1, NULL, NULL, 'sumbangan');
INSERT INTO public.stok_buku (id, nama, penerbit, jenis, genre, pengarang, ilustrator, jumlah_masuk, jumlah_keluar, jumlah_sisa, created_at, created_by, updated_at, updated_by, kategori) VALUES (5, 'One Punch Man', 'Shueisa, Ltd', 'kmk', 'act', 'One', 'Yusuke Murata', 0, -50, 370, '21:41:58', 1, NULL, NULL, 'sumbangan');
INSERT INTO public.stok_buku (id, nama, penerbit, jenis, genre, pengarang, ilustrator, jumlah_masuk, jumlah_keluar, jumlah_sisa, created_at, created_by, updated_at, updated_by, kategori) VALUES (6, 'One Punch Man', 'Shueisa, Ltd', 'kmk', 'act', 'One', 'Yusuke Murata', 0, -70, 300, '21:43:46', 1, NULL, NULL, 'peminjaman');
INSERT INTO public.stok_buku (id, nama, penerbit, jenis, genre, pengarang, ilustrator, jumlah_masuk, jumlah_keluar, jumlah_sisa, created_at, created_by, updated_at, updated_by, kategori) VALUES (7, 'Gusdur, Presiden RI ke 4', 'PT Percetakan Angin Ribut', 'bio', 'rom', 'Yenni Wahid', '', 0, -2, 6, '21:44:17', 1, NULL, NULL, 'peminjaman');


--
-- TOC entry 3337 (class 0 OID 0)
-- Dependencies: 218
-- Name: stok_buku_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.stok_buku_id_seq', 7, true);


--
-- TOC entry 3186 (class 2606 OID 16542)
-- Name: stok_buku stok_buku_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stok_buku
    ADD CONSTRAINT stok_buku_pkey PRIMARY KEY (id);


-- Completed on 2024-03-26 21:47:23

--
-- PostgreSQL database dump complete
--

