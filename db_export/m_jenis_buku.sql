--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

-- Started on 2024-03-26 21:48:48

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
-- TOC entry 217 (class 1259 OID 16528)
-- Name: m_jenis_buku; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.m_jenis_buku (
    id integer NOT NULL,
    kode character varying(3) NOT NULL,
    nama character varying(50) NOT NULL,
    is_active smallint NOT NULL,
    created_at timestamp without time zone,
    created_by integer,
    updated_at timestamp without time zone,
    updated_by integer,
    deleted_at timestamp without time zone,
    deleted_by integer
);


ALTER TABLE public.m_jenis_buku OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16527)
-- Name: m_jenis_buku_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.m_jenis_buku_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.m_jenis_buku_id_seq OWNER TO postgres;

--
-- TOC entry 3336 (class 0 OID 0)
-- Dependencies: 216
-- Name: m_jenis_buku_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.m_jenis_buku_id_seq OWNED BY public.m_jenis_buku.id;


--
-- TOC entry 3184 (class 2604 OID 16531)
-- Name: m_jenis_buku id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.m_jenis_buku ALTER COLUMN id SET DEFAULT nextval('public.m_jenis_buku_id_seq'::regclass);


--
-- TOC entry 3330 (class 0 OID 16528)
-- Dependencies: 217
-- Data for Name: m_jenis_buku; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.m_jenis_buku (id, kode, nama, is_active, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) VALUES (11, 'ktb', 'Kitab', 1, '2024-03-22 21:48:38', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.m_jenis_buku (id, kode, nama, is_active, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) VALUES (12, 'bio', 'biografi', 1, '2024-03-22 21:49:14', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.m_jenis_buku (id, kode, nama, is_active, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) VALUES (13, 'nsk', 'naskah', 1, '2024-03-22 21:50:15', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.m_jenis_buku (id, kode, nama, is_active, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) VALUES (2, 'mjl', 'Majalah', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.m_jenis_buku (id, kode, nama, is_active, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) VALUES (1, 'nov', 'Novel', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.m_jenis_buku (id, kode, nama, is_active, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) VALUES (10, 'ens', 'Ensiklopedia', 0, '2024-03-22 21:47:55', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.m_jenis_buku (id, kode, nama, is_active, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) VALUES (7, 'kms', 'Kamus', 1, '2024-03-22 21:41:53', 1, '2024-03-25 20:47:00', 1, NULL, NULL);
INSERT INTO public.m_jenis_buku (id, kode, nama, is_active, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) VALUES (8, 'kmk', 'Komik', 1, '2024-03-22 21:43:32', 1, '2024-03-25 20:48:40', 1, NULL, NULL);
INSERT INTO public.m_jenis_buku (id, kode, nama, is_active, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) VALUES (14, 'bkt', 'Buku Tulis', 1, '2024-03-25 19:47:37', 1, '2024-03-26 19:21:26', 1, NULL, NULL);
INSERT INTO public.m_jenis_buku (id, kode, nama, is_active, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) VALUES (9, 'ens', 'Ensiklopedia', 1, '2024-03-22 21:47:06', 1, '2024-03-26 19:21:39', 1, NULL, NULL);


--
-- TOC entry 3337 (class 0 OID 0)
-- Dependencies: 216
-- Name: m_jenis_buku_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.m_jenis_buku_id_seq', 14, true);


--
-- TOC entry 3186 (class 2606 OID 16533)
-- Name: m_jenis_buku m_jenis_buku_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.m_jenis_buku
    ADD CONSTRAINT m_jenis_buku_pkey PRIMARY KEY (id);


-- Completed on 2024-03-26 21:48:49

--
-- PostgreSQL database dump complete
--

