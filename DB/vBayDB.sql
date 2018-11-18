--
-- PostgreSQL database dump
--

-- Dumped from database version 10.5
-- Dumped by pg_dump version 10.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: vbaydb; Type: SCHEMA; Schema: -; Owner: root
--

CREATE SCHEMA vbaydb;


-- ALTER SCHEMA vbaydb OWNER TO root;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: auction; Type: TABLE; Schema: vbaydb; Owner: root
--

CREATE TABLE vbaydb.auction (
    auctionid bigint NOT NULL,
    userid character varying(30) NOT NULL,
    gameid bigint,
    description character varying(255),
    status character varying(15),
    startprice double precision
);


-- ALTER TABLE vbaydb.auction OWNER TO root;

--
-- Name: auction_auctionid_seq; Type: SEQUENCE; Schema: vbaydb; Owner: root
--

CREATE SEQUENCE vbaydb.auction_auctionid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


-- ALTER TABLE vbaydb.auction_auctionid_seq OWNER TO root;

--
-- Name: auction_auctionid_seq; Type: SEQUENCE OWNED BY; Schema: vbaydb; Owner: root
--

ALTER SEQUENCE vbaydb.auction_auctionid_seq OWNED BY vbaydb.auction.auctionid;


--
-- Name: bid; Type: TABLE; Schema: vbaydb; Owner: root
--

CREATE TABLE vbaydb.bid (
    bidid bigint NOT NULL,
    userid character varying(30) NOT NULL,
    auctionid bigint,
    price double precision
);


-- ALTER TABLE vbaydb.bid OWNER TO root;

--
-- Name: bid_bidid_seq; Type: SEQUENCE; Schema: vbaydb; Owner: root
--

CREATE SEQUENCE vbaydb.bid_bidid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


-- ALTER TABLE vbaydb.bid_bidid_seq OWNER TO root;

--
-- Name: bid_bidid_seq; Type: SEQUENCE OWNED BY; Schema: vbaydb; Owner: root
--

ALTER SEQUENCE vbaydb.bid_bidid_seq OWNED BY vbaydb.bid.bidid;


--
-- Name: completed_trade; Type: TABLE; Schema: vbaydb; Owner: root
--

CREATE TABLE vbaydb.completed_trade (
    completionid bigint NOT NULL,
    tradeid bigint,
    primarytraderid character varying(30) NOT NULL,
    secondarytraderid character varying(30) NOT NULL,
    tradedate date
);


-- ALTER TABLE vbaydb.completed_trade OWNER TO root;

--
-- Name: completed_trade_completionid_seq; Type: SEQUENCE; Schema: vbaydb; Owner: root
--

CREATE SEQUENCE vbaydb.completed_trade_completionid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


-- ALTER TABLE vbaydb.completed_trade_completionid_seq OWNER TO root;

--
-- Name: completed_trade_completionid_seq; Type: SEQUENCE OWNED BY; Schema: vbaydb; Owner: root
--

ALTER SEQUENCE vbaydb.completed_trade_completionid_seq OWNED BY vbaydb.completed_trade.completionid;


--
-- Name: game; Type: TABLE; Schema: vbaydb; Owner: root
--

CREATE TABLE vbaydb.game (
    gameid bigint NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255)
);


-- ALTER TABLE vbaydb.game OWNER TO root;

--
-- Name: game_gameid_seq; Type: SEQUENCE; Schema: vbaydb; Owner: root
--

CREATE SEQUENCE vbaydb.game_gameid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


-- ALTER TABLE vbaydb.game_gameid_seq OWNER TO root;

--
-- Name: game_gameid_seq; Type: SEQUENCE OWNED BY; Schema: vbaydb; Owner: root
--

ALTER SEQUENCE vbaydb.game_gameid_seq OWNED BY vbaydb.game.gameid;


--
-- Name: offer; Type: TABLE; Schema: vbaydb; Owner: root
--

CREATE TABLE vbaydb.offer (
    offerid bigint NOT NULL,
    userid character varying(30) NOT NULL,
    tradeid bigint,
    gameid bigint,
    game_condition character varying(30),
    message character varying(255)
);


-- ALTER TABLE vbaydb.offer OWNER TO root;

--
-- Name: offer_offerid_seq; Type: SEQUENCE; Schema: vbaydb; Owner: root
--

CREATE SEQUENCE vbaydb.offer_offerid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


-- ALTER TABLE vbaydb.offer_offerid_seq OWNER TO root;

--
-- Name: offer_offerid_seq; Type: SEQUENCE OWNED BY; Schema: vbaydb; Owner: root
--

ALTER SEQUENCE vbaydb.offer_offerid_seq OWNED BY vbaydb.offer.offerid;


--
-- Name: sale; Type: TABLE; Schema: vbaydb; Owner: root
--

CREATE TABLE vbaydb.sale (
    saleid bigint NOT NULL,
    auctionid bigint,
    sellerid character varying(30) NOT NULL,
    buyerid character varying(30) NOT NULL,
    price double precision,
    saledate date
);


-- ALTER TABLE vbaydb.sale OWNER TO root;

--
-- Name: sale_saleid_seq; Type: SEQUENCE; Schema: vbaydb; Owner: root
--

CREATE SEQUENCE vbaydb.sale_saleid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


-- ALTER TABLE vbaydb.sale_saleid_seq OWNER TO root;

--
-- Name: sale_saleid_seq; Type: SEQUENCE OWNED BY; Schema: vbaydb; Owner: root
--

ALTER SEQUENCE vbaydb.sale_saleid_seq OWNED BY vbaydb.sale.saleid;


--
-- Name: trade; Type: TABLE; Schema: vbaydb; Owner: root
--

CREATE TABLE vbaydb.trade (
    tradeid bigint NOT NULL,
    userid character varying(30) NOT NULL,
    gameid bigint,
    description character varying(255),
    game_condition character varying(30),
    status character varying(15)
);


-- ALTER TABLE vbaydb.trade OWNER TO root;

--
-- Name: trade_tradeid_seq; Type: SEQUENCE; Schema: vbaydb; Owner: root
--

CREATE SEQUENCE vbaydb.trade_tradeid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


-- ALTER TABLE vbaydb.trade_tradeid_seq OWNER TO root;

--
-- Name: trade_tradeid_seq; Type: SEQUENCE OWNED BY; Schema: vbaydb; Owner: root
--

ALTER SEQUENCE vbaydb.trade_tradeid_seq OWNED BY vbaydb.trade.tradeid;


--
-- Name: user; Type: TABLE; Schema: vbaydb; Owner: root
--

CREATE TABLE vbaydb."user" (
    userid character varying(30) NOT NULL,
    email character varying(255),
    password character varying(64),
    firstname character varying(255),
    lastname character varying(255)
);


-- ALTER TABLE vbaydb."user" OWNER TO root;

--
-- Name: auction auctionid; Type: DEFAULT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.auction ALTER COLUMN auctionid SET DEFAULT nextval('vbaydb.auction_auctionid_seq'::regclass);


--
-- Name: bid bidid; Type: DEFAULT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.bid ALTER COLUMN bidid SET DEFAULT nextval('vbaydb.bid_bidid_seq'::regclass);


--
-- Name: completed_trade completionid; Type: DEFAULT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.completed_trade ALTER COLUMN completionid SET DEFAULT nextval('vbaydb.completed_trade_completionid_seq'::regclass);


--
-- Name: game gameid; Type: DEFAULT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.game ALTER COLUMN gameid SET DEFAULT nextval('vbaydb.game_gameid_seq'::regclass);


--
-- Name: offer offerid; Type: DEFAULT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.offer ALTER COLUMN offerid SET DEFAULT nextval('vbaydb.offer_offerid_seq'::regclass);


--
-- Name: sale saleid; Type: DEFAULT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.sale ALTER COLUMN saleid SET DEFAULT nextval('vbaydb.sale_saleid_seq'::regclass);


--
-- Name: trade tradeid; Type: DEFAULT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.trade ALTER COLUMN tradeid SET DEFAULT nextval('vbaydb.trade_tradeid_seq'::regclass);


--
-- Data for Name: auction; Type: TABLE DATA; Schema: vbaydb; Owner: root
--

COPY vbaydb.auction (auctionid, userid, gameid, description, status, startprice) FROM stdin;
\.


--
-- Data for Name: bid; Type: TABLE DATA; Schema: vbaydb; Owner: root
--

COPY vbaydb.bid (bidid, userid, auctionid, price) FROM stdin;
\.


--
-- Data for Name: completed_trade; Type: TABLE DATA; Schema: vbaydb; Owner: root
--

COPY vbaydb.completed_trade (completionid, tradeid, primarytraderid, secondarytraderid, tradedate) FROM stdin;
\.


--
-- Data for Name: game; Type: TABLE DATA; Schema: vbaydb; Owner: root
--

COPY vbaydb.game (gameid, name, description) FROM stdin;
\.


--
-- Data for Name: offer; Type: TABLE DATA; Schema: vbaydb; Owner: root
--

COPY vbaydb.offer (offerid, userid, tradeid, gameid, game_condition, message) FROM stdin;
\.


--
-- Data for Name: sale; Type: TABLE DATA; Schema: vbaydb; Owner: root
--

COPY vbaydb.sale (saleid, auctionid, sellerid, buyerid, price, saledate) FROM stdin;
\.


--
-- Data for Name: trade; Type: TABLE DATA; Schema: vbaydb; Owner: root
--

COPY vbaydb.trade (tradeid, userid, gameid, description, game_condition, status) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: vbaydb; Owner: root
--

COPY vbaydb."user" (userid, email, password, firstname, lastname) FROM stdin;
\.


--
-- Name: auction_auctionid_seq; Type: SEQUENCE SET; Schema: vbaydb; Owner: root
--

SELECT pg_catalog.setval('vbaydb.auction_auctionid_seq', 1, true);


--
-- Name: bid_bidid_seq; Type: SEQUENCE SET; Schema: vbaydb; Owner: root
--

SELECT pg_catalog.setval('vbaydb.bid_bidid_seq', 1, true);


--
-- Name: completed_trade_completionid_seq; Type: SEQUENCE SET; Schema: vbaydb; Owner: root
--

SELECT pg_catalog.setval('vbaydb.completed_trade_completionid_seq', 1, true);


--
-- Name: game_gameid_seq; Type: SEQUENCE SET; Schema: vbaydb; Owner: root
--

SELECT pg_catalog.setval('vbaydb.game_gameid_seq', 1, true);


--
-- Name: offer_offerid_seq; Type: SEQUENCE SET; Schema: vbaydb; Owner: root
--

SELECT pg_catalog.setval('vbaydb.offer_offerid_seq', 1, true);


--
-- Name: sale_saleid_seq; Type: SEQUENCE SET; Schema: vbaydb; Owner: root
--

SELECT pg_catalog.setval('vbaydb.sale_saleid_seq', 1, true);


--
-- Name: trade_tradeid_seq; Type: SEQUENCE SET; Schema: vbaydb; Owner: root
--

SELECT pg_catalog.setval('vbaydb.trade_tradeid_seq', 1, true);


--
-- Name: auction idx_16388_primary; Type: CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.auction
    ADD CONSTRAINT idx_16388_primary PRIMARY KEY (auctionid);


--
-- Name: bid idx_16394_primary; Type: CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.bid
    ADD CONSTRAINT idx_16394_primary PRIMARY KEY (bidid);


--
-- Name: completed_trade idx_16400_primary; Type: CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.completed_trade
    ADD CONSTRAINT idx_16400_primary PRIMARY KEY (completionid);


--
-- Name: game idx_16406_primary; Type: CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.game
    ADD CONSTRAINT idx_16406_primary PRIMARY KEY (gameid);


--
-- Name: offer idx_16415_primary; Type: CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.offer
    ADD CONSTRAINT idx_16415_primary PRIMARY KEY (offerid);


--
-- Name: sale idx_16421_primary; Type: CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.sale
    ADD CONSTRAINT idx_16421_primary PRIMARY KEY (saleid);


--
-- Name: trade idx_16427_primary; Type: CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.trade
    ADD CONSTRAINT idx_16427_primary PRIMARY KEY (tradeid);


--
-- Name: user idx_16431_primary; Type: CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb."user"
    ADD CONSTRAINT idx_16431_primary PRIMARY KEY (userid);


--
-- Name: idx_16388_fk_auction_game; Type: INDEX; Schema: vbaydb; Owner: root
--

CREATE INDEX idx_16388_fk_auction_game ON vbaydb.auction USING btree (gameid);


--
-- Name: idx_16388_fk_auction_user; Type: INDEX; Schema: vbaydb; Owner: root
--

CREATE INDEX idx_16388_fk_auction_user ON vbaydb.auction USING btree (userid);


--
-- Name: idx_16394_fk_bid_auction; Type: INDEX; Schema: vbaydb; Owner: root
--

CREATE INDEX idx_16394_fk_bid_auction ON vbaydb.bid USING btree (auctionid);


--
-- Name: idx_16394_fk_bid_user; Type: INDEX; Schema: vbaydb; Owner: root
--

CREATE INDEX idx_16394_fk_bid_user ON vbaydb.bid USING btree (userid);


--
-- Name: idx_16400_fk_complete_trade; Type: INDEX; Schema: vbaydb; Owner: root
--

CREATE INDEX idx_16400_fk_complete_trade ON vbaydb.completed_trade USING btree (tradeid);


--
-- Name: idx_16400_fk_primary; Type: INDEX; Schema: vbaydb; Owner: root
--

CREATE INDEX idx_16400_fk_primary ON vbaydb.completed_trade USING btree (primarytraderid);


--
-- Name: idx_16400_fk_secondary; Type: INDEX; Schema: vbaydb; Owner: root
--

CREATE INDEX idx_16400_fk_secondary ON vbaydb.completed_trade USING btree (secondarytraderid);


--
-- Name: idx_16415_fk_offer_trade; Type: INDEX; Schema: vbaydb; Owner: root
--

CREATE INDEX idx_16415_fk_offer_trade ON vbaydb.offer USING btree (tradeid);


--
-- Name: idx_16415_fk_offer_user; Type: INDEX; Schema: vbaydb; Owner: root
--

CREATE INDEX idx_16415_fk_offer_user ON vbaydb.offer USING btree (userid);


--
-- Name: idx_16421_fk_buyer; Type: INDEX; Schema: vbaydb; Owner: root
--

CREATE INDEX idx_16421_fk_buyer ON vbaydb.sale USING btree (buyerid);


--
-- Name: idx_16421_fk_sale_auction; Type: INDEX; Schema: vbaydb; Owner: root
--

CREATE INDEX idx_16421_fk_sale_auction ON vbaydb.sale USING btree (auctionid);


--
-- Name: idx_16421_fk_seller; Type: INDEX; Schema: vbaydb; Owner: root
--

CREATE INDEX idx_16421_fk_seller ON vbaydb.sale USING btree (sellerid);


--
-- Name: idx_16427_fk_trade_game; Type: INDEX; Schema: vbaydb; Owner: root
--

CREATE INDEX idx_16427_fk_trade_game ON vbaydb.trade USING btree (gameid);


--
-- Name: idx_16427_fk_trade_user; Type: INDEX; Schema: vbaydb; Owner: root
--

CREATE INDEX idx_16427_fk_trade_user ON vbaydb.trade USING btree (userid);


--
-- Name: auction fk_auction_game; Type: FK CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.auction
    ADD CONSTRAINT fk_auction_game FOREIGN KEY (gameid) REFERENCES vbaydb.game(gameid) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: auction fk_auction_user; Type: FK CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.auction
    ADD CONSTRAINT fk_auction_user FOREIGN KEY (userid) REFERENCES vbaydb."user"(userid) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: bid fk_bid_auction; Type: FK CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.bid
    ADD CONSTRAINT fk_bid_auction FOREIGN KEY (auctionid) REFERENCES vbaydb.auction(auctionid) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: bid fk_bid_user; Type: FK CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.bid
    ADD CONSTRAINT fk_bid_user FOREIGN KEY (userid) REFERENCES vbaydb."user"(userid) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: sale fk_buyer; Type: FK CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.sale
    ADD CONSTRAINT fk_buyer FOREIGN KEY (buyerid) REFERENCES vbaydb."user"(userid) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: completed_trade fk_complete_trade; Type: FK CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.completed_trade
    ADD CONSTRAINT fk_complete_trade FOREIGN KEY (tradeid) REFERENCES vbaydb.trade(tradeid) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: offer fk_offer_trade; Type: FK CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.offer
    ADD CONSTRAINT fk_offer_trade FOREIGN KEY (tradeid) REFERENCES vbaydb.trade(tradeid) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: offer fk_offer_user; Type: FK CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.offer
    ADD CONSTRAINT fk_offer_user FOREIGN KEY (userid) REFERENCES vbaydb."user"(userid) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: completed_trade fk_primary; Type: FK CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.completed_trade
    ADD CONSTRAINT fk_primary FOREIGN KEY (primarytraderid) REFERENCES vbaydb."user"(userid) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: sale fk_sale_auction; Type: FK CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.sale
    ADD CONSTRAINT fk_sale_auction FOREIGN KEY (auctionid) REFERENCES vbaydb.auction(auctionid) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: completed_trade fk_secondary; Type: FK CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.completed_trade
    ADD CONSTRAINT fk_secondary FOREIGN KEY (secondarytraderid) REFERENCES vbaydb."user"(userid) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: sale fk_seller; Type: FK CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.sale
    ADD CONSTRAINT fk_seller FOREIGN KEY (sellerid) REFERENCES vbaydb."user"(userid) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: trade fk_trade_game; Type: FK CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.trade
    ADD CONSTRAINT fk_trade_game FOREIGN KEY (gameid) REFERENCES vbaydb.game(gameid) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: trade fk_trade_user; Type: FK CONSTRAINT; Schema: vbaydb; Owner: root
--

ALTER TABLE ONLY vbaydb.trade
    ADD CONSTRAINT fk_trade_user FOREIGN KEY (userid) REFERENCES vbaydb."user"(userid) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

