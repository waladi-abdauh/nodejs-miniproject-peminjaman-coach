--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

-- Started on 2024-03-26 20:35:26

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
-- TOC entry 220 (class 1259 OID 16543)
-- Name: m_genre; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.m_genre (
    kode character varying(3),
    nama character varying(50),
    is_active smallint,
    created_at timestamp without time zone,
    created_by integer,
    updated_at timestamp without time zone,
    updated_by integer,
    deleted_at timestamp without time zone,
    deleted_by integer,
    id integer NOT NULL
);


ALTER TABLE public.m_genre OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16548)
-- Name: m_genre_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.m_genre_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.m_genre_id_seq OWNER TO postgres;

--
-- TOC entry 3334 (class 0 OID 0)
-- Dependencies: 221
-- Name: m_genre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.m_genre_id_seq OWNED BY public.m_genre.id;


--
-- TOC entry 3184 (class 2604 OID 16549)
-- Name: m_genre id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.m_genre ALTER COLUMN id SET DEFAULT nextval('public.m_genre_id_seq'::regclass);


--
-- TOC entry 3327 (class 0 OID 16543)
-- Dependencies: 220
-- Data for Name: m_genre; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.m_genre (kode, nama, is_active, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by, id) VALUES ('hor', 'horror', 1, NULL, NULL, NULL, NULL, NULL, NULL, 1);
INSERT INTO public.m_genre (kode, nama, is_active, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by, id) VALUES ('kom', 'komedi', 1, NULL, NULL, NULL, NULL, NULL, NULL, 2);
INSERT INTO public.m_genre (kode, nama, is_active, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by, id) VALUES ('act', 'aksi/action', 1, NULL, NULL, NULL, NULL, NULL, NULL, 3);
INSERT INTO public.m_genre (kode, nama, is_active, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by, id) VALUES ('rom', 'romansa/romantic', 1, NULL, NULL, NULL, NULL, NULL, NULL, 4);


--
-- TOC entry 3335 (class 0 OID 0)
-- Dependencies: 221
-- Name: m_genre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.m_genre_id_seq', 4, true);


-- Completed on 2024-03-26 20:35:29

--
-- PostgreSQL database dump complete
--

