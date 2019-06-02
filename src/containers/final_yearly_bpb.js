import React, {
    Component
} from 'react';
import {
    connect
} from "react-redux";
import {
    KiteTicker
} from 'kiteconnect';
import {
    pivotJDData,
    addJDTickData,
    getAcessToken,
    addTickData,
    pivotData,
    addTickDataNifty,
    pivotDataNifty,
    addTickDataNickle,
    pivotDataNickle,
    removePlotdatatest,
    removeTickDataTest,
    removeTickData,
    getAlphaData,
    removeAlphadata,
    saveMainArray,
    saveTotalBuyArray,
    saveTriggeredBuyArray,
} from '../action/action.js';
import {
    withRouter
} from "react-router-dom";
import KitePlot from './plot.js';
import LineApp from './lineplot.js';
import * as KiteConnect from './connect.js';
import Nifty from './NiftyTest.js';
import Crude from './CrudeTest.js';
import _ from "lodash";
import axios from 'axios';
import {ducasoft} from './ducasoft.js';
import {crudedata} from './data.js';




//neha laptop 0-300
var consolidatedArray = ["AGLSL", "AGRITECH", "AGROPHOS", "AHLEAST", "AHLUCONT", "AHLWEST", "AIAENG", "AIONJSW", "AJANTPHARM", "AJMERA", "AKSHARCHEM", "AKSHOPTFBR", "AKZOINDIA", "ALANKIT", "ALBERTDAVD", "ALBK", "ADHUNIKIND", "ADLABS", "ADORWELD", "ADSL", "ADVANIHOTR", "ADVENZYMES", "AEGISCHEM", "AGARIND", "AGCNET","20MICRONS", "21STCENMGM", "3IINFOTECH", "3MINDIA", "3PLAND", "5PAISA", "63MOONS", "8KMILES", "AARTIDRUGS", "AARTIIND", "AARVEEDEN", "AAVAS", "ABB", "ABBOTINDIA", "ABCAPITAL", "ABFRL", "ABMINTLTD", "ABSLNN50ET", "ACC", "ACCELYA", "ACE", "ADANIENT", "ADANIGAS", "ADANIGREEN", "ADANIPORTS", "ADANIPOWER", "ADANITRANS", "ADFFOODS"];

var consolidatedArray = ["ALEMBICLTD", "ALICON", "ALKALI", "ALKEM", "ALKYLAMINE", "ALLCARGO", "ALLSEC", "ALMONDZ", "ALOKTEXT", "ALPA", "ALPHAGEO", "AMARAJABAT", "AMBER", "AMBIKCO", "AMBUJACEM", "AMDIND", "AMJLAND", "AMRUTANJAN", "ANANTRAJ", "ANDHRABANK", "ANDHRSUGAR", "ANIKINDS", "ANSALAPI", "APARINDS", "APCL", "APCOTEXIND", "APEX", "APLAPOLLO", "APLLTD", "APOLLO", "APOLLOHOSP", "APOLLOTYRE", "APTECHT", "ARCHIDPLY", "ARCHIES", "ARENTERP", "ARIES", "ARIHANT", "ARMANFIN", "AROGRANITE", "ARROWTEX", "ARSHIYA", "ARSSINFRA", "ARVIND", "ARVSMART", "ASAHISONG", "ASAL"];

var consolidatedArray = [ "BANKBEES", "BANKINDIA", "BANSWRAS", "BARTRONICS", "BASF", "BASML", "BATAINDIA", "BAYERCROP", "BBL", "BBTC", "BDL", "BEARDSELL", "BEDMUTHA", "BEL", "BEML", "BEPL", "BERGEPAINT", "BFINVEST", "BFUTILITIE", "BGRENERGY", "BHAGERIA", "BHAGYANGR", "BHAGYAPROP", "BHANDARI", "BHARATFIN", "BHARATFORG", "BHARATGEAR", "BHARATRAS", "BHARATWIRE", "BHARTIARTL", "BHEL", "BIGBLOC", "BIL", "BINDALAGRO", "BIOCON", "BIRLACABLE", "BIRLACORPN", "BKMINDST", "BLBLIMITED", "BLISSGVS", "BLKASHYAP", "BLS", "BLUEBLENDS", "BLUEDART", "BLUESTARCO"];


var consolidatedArray = ["ASHOKLEY", "ASIANHOTNR", "ASIANPAINT", "ASIANTILES", "ASPINWALL", "ASTEC", "ASTERDM", "ASTRAL", "ASTRAMICRO", "ASTRAZEN", "ASTRON", "ATFL", "ATLANTA", "ATUL", "ATULAUTO", "AUBANK", "AURIONPRO", "AUROPHARMA", "AUSOMENT", "AUTOAXLES", "AUTOIND", "AUTOLITIND", "AVADHSUGAR", "AVANTIFEED", "AVTNPL", "AXISBANK", "AXISCADES", "AXISGOLD", "AXISNIFTY", "AYMSYNTEX", "BAFNAPHARM", "BAGFILMS", "BAJAJCON", "BAJAJELEC", "BAJAJFINSV", "BAJAJHIND", "BAJAJHLDNG", "BAJFINANCE", "BALAJITELE", "BALAMINES", "BALKRISHNA", "BALKRISIND", "BALLARPUR", "BALMLAWRIE", "BALPHARMA", "BALRAMCHIN", "BANARBEADS", "BANARISUG"];


var consolidatedArray = ["BROOKS", "BSE", "BSELINFRA", "BSL", "BSLGOLDETF", "BSLNIFTY", "BODALCHEM", "BOMDYEING", "BOROSIL", "BOSCHLTD", "BPCL", "BPL", "BRIGADE", "BRITANNIA", "BRNL", "COFFEEDAY", "COLPAL", "COMPINFO", "COMPUSOFT", "CONCOR", "CONSOFINVT", "CONTROLPR", "CORALFINAC", "CORDSCABLE", "COROMANDEL", "CORPBANK", "COSMOFILMS", "COUNCODOS", "COX&KINGS", "CPSEETF", "CREATIVEYE", "CREDITACC", "CREST", "CRISIL", "CRMFGETF", "CROMPTON", "CTE", "CUB", "CUBEXTUB", "CUMMINSIND", "CUPID", "CYBERMEDIA", "CYBERTECH", "CYIENT", "DAAWAT", "DABUR", "DALBHARAT", "DALMIASUG", "DAMODARIND", "DATAMATICS"]

var consolidatedArray = [ "BSOFT", "BUTTERFLY", "BYKE", "CADILAHC", "CALSOFT", "CAMLINFINE", "CANBK", "CANFINHOME", "CANTABIL", "CAPACITE", "CAPLIPOINT", "CARBORUNIV", "CAREERP", "CARERATING", "CASTEXTECH", "CASTROLIND", "CCHHL", "CCL", "CDSL", "CEATLTD", "CELEBRITY", "CELESTIAL", "CENTENKA", "CENTEXT", "CENTRALBK", "CENTRUM", "CENTUM", "CENTURYPLY", "CENTURYTEX", "CERA", "CEREBRAINT", "CESC", "CESCVENT", "CGCL", "CGPOWER", "CHALET", "CHAMBLFERT", "CHEMFAB", "CHENNPETRO", "CHOLAFIN", "CIGNITITEC", "CIMMCO", "CINELINE", "CIPLA", "CLEDUCATE", "CLNINDIA", "CMICABLES", "CNOVAPETRO", "COALINDIA", "COCHINSHIP"];

var consolidatedArray = ["ASHAPURMIN", "ASHIANA", "ASHOKA","DRREDDY", "DSSL", "DTIL", "DUCON","DBCORP", "DBL", "DBSTOCKBRO", "DCAL", "DCBBANK", "DCM", "DCMFINSERV", "DCMSHRIRAM", "DCW", "DECCANCE", "DEEPAKFERT", "DEEPAKNTR", "DEEPIND", "DELTACORP", "DELTAMAGNT", "DEN", "DENORA", "DFMFOODS", "DHAMPURSUG", "DHANBANK", "DHANUKA", "DHARSUGAR", "DHFL", "DHUNINV", "DIAMONDYD", "DICIND", "DIGJAMLTD", "DISHTV", "DIVISLAB", "DIXON", "DLF", "DLINKINDIA", "DMART", "DOLLAR", "DOLPHINOFF", "DONEAR", "DPSCLTD", "DQE", "DREDGECORP","BANCOINDIA", "BANDHANBNK", "BANG", "BANKBARODA"];

var consolidatedArray = ["EBANK", "ECEIND", "ECLERX", "EDELWEISS", "EICHERMOT", "EIDPARRY", "EIHAHOTELS", "EIHOTEL", "EIMCOELECO", "EKC", "ELECON", "ELECTCAST", "ELECTHERM", "ELGIEQUIP", "ELGIRUBCO", "EMAMILTD", "EMAMIREAL", "EMKAY", "EMMBI", "ENDURANCE", "ENERGYDEV", "ENGINERSIN", "ENIL", "EON", "EQ30", "EQUITAS", "ERIS", "EROSMEDIA", "ESABINDIA", "ESCORTS", "ESSARSHPNG", "ESSDEE", "ESSELPACK", "ESTER", "EUROTEXIND", "EVEREADY", "EVERESTIND", "EXCEL", "EXCELCROP", "EXCELINDUS", "EXIDEIND", "FACT", "FAIRCHEM", "FCL", "FCONSUMER", "FDC", "FEDERALBNK", "FEL", "FELDVR", "FIEMIND", "FILATEX", "FINCABLES"]

var consolidatedArray = [ "DVL", "DWARKESH", "DYNAMATECH", "DYNPRO", "EASUNREYRL", "FSL", "GABRIEL", "GAEL", "GAIL", "GAL", "GALAXYSURF", "GALLANTT", "FINEORG", "FINPIPE", "FLEXITUFF", "FLFL", "FMGOETZE", "FORTIS", "FOSECOIND", "FRETAIL", "FSC", "GOLDTECH", "GOODLUCK", "GPIL", "GPPL", "GPTINFRA", "GRANULES", "GRAPHITE", "GRASIM", "GRAVITA", "GREAVESCOT", "GREENLAM", "GREENPLY", "GRINDWELL", "GROBTEA", "GRPLTD", "GRSE", "GRUH", "GSCLCEMENT", "GSFC", "GSKCONS", "GSPL", "GSS", "GTLINFRA", "GTNIND", "GTPL", "GUFICBIO", "GUJALKALI", "GUJAPOLLO", "GUJFLUORO", "GUJGASLTD", "GULFOILLUB", "GULFPETRO", "GULPOLY"];

var consolidatedArray = ["GALLISPAT", "GAMMNINFRA", "GANDHITUBE", "GANECOS", "GANESHHOUC", "GANGESSECU", "GARDENSILK", "GARFIBRES", "GATI", "GAYAHWS", "GAYAPROJ", "GDL", "GEECEE", "GENESYS", "GENUSPAPER", "GENUSPOWER", "GEOJITFSL", "GEPIL", "GESHIP", "GET&D", "GHCL", "GICHSGFIN", "GICRE", "GILLANDERS", "GILLETTE", "GINNIFILA", "GIPCL", "GISOLUTION", "GKWLIMITED", "GLAXO", "GLENMARK", "GLOBALVECT", "GLOBOFFS", "GLOBUSSPR", "GMBREW", "GMDCLTD", "GMMPFAUDLR", "GMRINFRA", "GNA", "GNFC", "GOACARBON", "GOCLCORP", "GODFRYPHLP", "GODREJAGRO", "GODREJCP", "GODREJIND", "GODREJPROP", "GOKEX", "GOLDBEES", "GOLDIAM", "GOLDSHARE"];


//office  500-1480


var consolidatedArray = ["GVKPIL", "HAL", "HARITASEAT", "HARRMALAYA", "HATHWAY", "HATSUN", "HAVELLS", "HBLPOWER", "HBSL", "HCC", "HCG", "HCLTECH", "HDFC", "HDFCAMC", "HDFCBANK", "HDFCLIFE", "HDFCMFGETF", "HDFCNIFETF", "HDFCSENETF", "HDIL", "HEG", "HEIDELBERG", "HERCULES", "HERITGFOOD", "HEROMOTOCO", "HESTERBIO", "HEXAWARE", "HFCL", "HGINFRA", "HGS", "HIGHGROUND", "HIKAL", "HIL", "HIMATSEIDE", "HINDALCO", "HINDCOMPOS", "HINDCOPPER", "HINDMOTORS", "HINDNATGLS", "HINDOILEXP", "HINDPETRO", "HINDUJAVEN", "HINDUNILVR", "HINDZINC", "HIRECT", "HISARMETAL", "HITECH", "HITECHCORP", "HITECHGEAR", "HMVL", "HNGSNGBEES", "HONAUT", "HONDAPOWER", "HOTELEELA", "HOVS", "HPL", "HSCL", "HSIL", "HTMEDIA", "HUBTOWN", "HUDCO", "IBREALEST", "IBULHSGFIN", "IBULISL", "IBVENTURES", "ICICI500", "ICICIB22", "ICICIBANK", "ICICIGI", "ICICIGOLD", "ICICILIQ", "ICICILOVOL", "ICICIMCAP", "ICICINF100", "ICICINIFTY", "ICICINV20", "ICICINXT50", "ICICIPRULI", "ICICISENSX", "ICIL", "ICRA", "IDBI", "IDBIGOLD", "IDEA", "IDFC", "IDFCFIRSTB", "IDFNIFTYET", "IEX", "IFBAGRO", "IFBIND", "IFCI", "IFGLEXPOR", "IGARASHI", "IGL", "IGPL", "IIFL", "IITL", "IL&FSTRANS", "IMFA", "IMPAL"]

var consolidatedArray = ["INDBANK", "INDHOTEL", "INDIACEM", "INDIAGLYCO", "INDIANB", "INDIANCARD", "INDIANHUME", "INDIGO", "INDLMETER", "INDNIPPON", "INDOCO", "INDOSTAR", "INDOTECH", "INDOTHAI", "INDOWIND", "INDRAMEDCO", "INDSWFTLAB", "INDTERRAIN", "INDUSINDBK", "INEOSSTYRO", "INFIBEAM", "INFRABEES", "INFRATEL", "INFY", "INGERRAND", "INOXLEISUR", "INOXWIND", "INSECTICID", "INSPIRISYS", "INTELLECT", "INTENTECH", "INVENTURE", "IOB", "IOC", "IOLCP", "IPAPPM", "IPCALAB", "IRB", "IRCON", "ISEC", "ITC", "ITDC", "ITDCEM", "ITI", "IVC", "IVP", "IVRCLINFRA", "IVZINGOLD", "IVZINNIFTY", "IZMO", "J&KBANK", "JAGRAN", "JAGSNPHARM", "JAICORPLTD", "JAMNAAUTO", "JAYAGROGN", "JAYBARMARU", "JAYSREETEA", "JBCHEPHARM", "JBMA", "JCHAC", "JETAIRWAYS", "JHS", "JINDALPHOT", "JINDALPOLY", "JINDALSAW", "JINDALSTEL", "JINDRILL", "JINDWORLD", "JISLDVREQS", "JISLJALEQS", "JKCEMENT", "JKIL", "JKLAKSHMI", "JKPAPER", "JKTYRE", "JMA", "JMCPROJECT", "JMFINANCIL", "JMTAUTOLTD", "JOCIL", "JPASSOCIAT", "JPINFRATEC", "JPPOWER", "JSL", "JSLHISAR", "JSWENERGY", "JSWHL", "JSWSTEEL", "JTEKTINDIA", "JUBILANT", "JUBLFOOD", "JUBLINDS", "JUNIORBEES", "JUSTDIAL", "JYOTHYLAB", "KABRAEXTRU", "KAJARIACER", "KAKATCEM", "KALPATPOWR"]

var consolidatedArray = ["KAMATHOTEL", "KAMDHENU", "KANANIIND", "KANORICHEM", "KANSAINER", "KARDA", "KARMAENG", "KARURVYSYA", "KAUSHALYA", "KAVVERITEL", "KAYA", "KCP", "KCPSUGIND", "KDDL", "KEC", "KECL", "KEI", "KESARENT", "KESORAMIND", "KEYCORPSER", "KHADIM", "KICL", "KILITCH", "KINGFA", "KIOCL", "KIRIINDUS", "KIRLOSBROS", "KIRLOSENG", "KIRLOSIND", "KITEX", "KKCL", "KMSUGAR", "KNRCON", "KOHINOOR", "KOKUYOCMLN", "KOLTEPATIL", "KOPRAN", "KOTAKBANK", "KOTAKBKETF", "KOTAKGOLD", "KOTAKNIFTY", "KOTAKNV20", "KOTAKPSUBK", "KOTARISUG", "KOTHARIPET", "KOTHARIPRO", "KPRMILL", "KRBL", "KREBSBIO", "KRIDHANINF", "KSB", "KSCL", "KSK", "KSL", "KTIL", "KTKBANK", "KWALITY", "L&TFH", "LAKSHVILAS", "LALPATHLAB", "LAMBODHARA", "LAOPALA", "LAURUSLABS", "LAXMIMACH", "LEEL", "LEMONTREE", "LGBBROSLTD", "LIBERTSHOE", "LICHSGFIN", "LICNETFGSC", "LICNETFN50", "LICNETFSEN", "LICNFNHGP", "LINCOLN", "LINCPEN", "LINDEINDIA", "LIQUIDBEES", "LIQUIDETF", "LOKESHMACH", "LOTUSEYE", "LOVABLE", "LPDC", "LSIL", "LT", "LTI", "LTTS", "LUMAXIND", "LUMAXTECH", "LUPIN", "LUXIND", "LYKALABS", "LYPSAGEMS", "M&M", "M&MFIN", "M100", "M50", "MAANALU", "MADHAV", "MADRASFERT", "MAGADSUGAR"]


var consolidatedArray = ["MAGMA", "MAGNUM", "MAHABANK", "MAHASTEEL", "MAHINDCIE", "MAHLIFE", "MAHLOG", "MAHSCOOTER", "MAHSEAMLES", "MAITHANALL", "MAJESCO", "MALUPAPER", "MAN50ETF", "MANAKALUCO", "MANAKCOAT", "MANAKSIA", "MANAKSTEEL", "MANALIPETC", "MANAPPURAM", "MANGCHEFER", "MANGLMCEM", "MANGTIMBER", "MANINDS", "MANINFRA", "MANPASAND", "MANUGRAPH", "MARALOVER", "MARATHON", "MARICO", "MARKSANS", "MARUTI", "MASFIN", "MASTEK", "MATRIMONY", "MAWANASUG", "MAXINDIA", "MAXVIL", "MAYURUNIQ", "MAZDA", "MBLINFRA", "MCDHOLDING", "MCLEODRUSS", "MCX", "MEGH", "MENONBE", "MEP", "MERCATOR", "MERCK", "MFSL", "MGL", "MHRIL", "MIDHANI", "MINDACORP", "MINDAIND", "MINDTECK", "MINDTREE", "MIRCELECTR", "MIRZAINT", "MMFL", "MMTC", "MOHITIND", "MOHOTAIND", "MOIL", "MOLDTECH", "MOLDTKPAC", "MONSANTO", "MONTECARLO", "MORARJEE", "MOREPENLAB", "MOTHERSUMI", "MOTILALOFS", "MOTOGENFIN", "MPHASIS", "MPSLTD", "MRF", "MRPL", "MSPL", "MTEDUCARE", "MTNL", "MUKANDENGG", "MUKANDLTD", "MUKTAARTS", "MUNJALAU", "MUNJALSHOW", "MURUDCERA", "MUTHOOTCAP", "MUTHOOTFIN", "MVL", "N100", "NACLIND", "NAGAFERT", "NAGAROIL", "NAGREEKCAP", "NAGREEKEXP", "NAHARCAP", "NAHARINDUS", "NAHARPOLY", "NAHARSPING", "NATCOPHARM", "NATHBIOGEN"]


var consolidatedArray =["NATIONALUM", "NAUKRI", "NAVINFLUOR", "NAVKARCORP", "NAVNETEDUL", "NBCC", "NBIFIN", "NBVENTURES", "NCC", "NCLIND", "NDGL", "NDL", "NECCLTD", "NECLIFE", "NELCAST", "NELCO", "NESCO", "NESTLEIND", "NETF", "NETWORK18", "NEULANDLAB", "NEWGEN", "NFL", "NH", "NHPC", "NIACL", "NIBL", "NIFTYBEES", "NIFTYEES", "NIITLTD", "NIITTECH", "NILAINFRA", "NILASPACES", "NILKAMAL", "NIPPOBATRY", "NITCO", "NITESHEST", "NITINFIRE", "NITINSPIN", "NKIND", "NLCINDIA", "NMDC", "NOCIL", "NOIDATOLL", "NORBTEAEXP", "NRAIL", "NRBBEARING", "NSIL", "NTPC", "NUCLEUS", "NUTEK", "OBEROIRLTY", "OCCL", "OFSS", "OIL", "OILCOUNTUB", "OLECTRA", "OMAXAUTO", "OMAXE", "OMMETALS", "ONGC", "ONMOBILE", "ONWARDTEC", "OPTIEMUS", "OPTOCIRCUI", "ORBTEXP", "ORICONENT", "ORIENTABRA", "ORIENTALTL", "ORIENTBANK", "ORIENTBELL", "ORIENTCEM", "ORIENTELEC", "ORIENTHOT", "ORIENTLTD", "ORIENTPPR", "ORIENTREF", "ORISSAMINE", "ORTINLABSS", "OSWALAGRO", "PAEL", "PAGEIND", "PAISALO", "PALASHSECU", "PALREDTEC", "PANACEABIO", "PANAMAPET", "PAPERPROD", "PARACABLES", "PARAGMILK", "PARSVNATH", "PATELENG", "PATINTLOG", "PATSPINLTD", "PCJEWELLER", "PDMJEPAPER", "PDSMFL", "PEARLPOLY", "PEL", "PENIND"]

var consolidatedArray = ["PENINLAND", "PENPEBS", "PERSISTENT", "PETRONENGG", "PETRONET", "PFC", "PFIZER", "PFOCUS", "PFS", "PGEL", "PGHH", "PGIL", "PHILIPCARB", "PHOENIXLTD", "PIDILITIND", "PIIND", "PILANIINVS", "PIONDIST", "PITTIENG", "PLASTIBLEN", "PNB", "PNBGILTS", "PNBHOUSING", "PNC", "PNCINFRA", "PODDARHOUS", "PODDARMENT", "POKARNA", "POLYMED", "POLYPLEX", "PONNIERODE", "POWERGRID", "POWERMECH", "PPAP", "PRABHAT", "PRAENG", "PRAJIND", "PRAKASH", "PRAKASHCON", "PRAKASHSTL", "PRAXIS", "PRECAM", "PRECOT", "PRECWIRE", "PREMEXPLN", "PREMIER", "PREMIERPOL", "PRESSMN", "PRESTIGE", "PRICOLLTD", "PRIMESECU", "PROZONINTU", "PRSMJOHNSN", "PSB", "PSPPROJECT", "PSUBNKBEES", "PTC", "PTL", "PUNJABCHEM", "PURVA", "PVR", "QGOLDHALF", "QNIFTY", "QUESS", "QUICKHEAL", "RADICO", "RADIOCITY", "RAIN", "RAJESHEXPO", "RAJSREESUG", "RALLIS", "RAMANEWS", "RAMASTEEL", "RAMCOCEM", "RAMCOIND", "RAMCOSYS", "RAMKY", "RANASUG", "RANEENGINE", "RANEHOLDIN", "RATNAMANI", "RAYMOND", "RBL", "RBLBANK", "RCF", "RCOM", "RECLTD", "REDINGTON", "REFEX", "RELAXO", "RELCAPITAL", "RELCNX100", "RELCONS", "RELDIVOPP", "RELIANCE", "RELIGARE", "RELINFRA", "RELNV20", "REMSONSIND", "RENUKA"]

var consolidatedArray = ["REPCOHOME", "REPRO", "RESPONIND", "RETFMID150", "REVATHI", "RHFL", "RICOAUTO", "RIIL", "RITES", "RJL", "RKFORGE", "RMCL", "RML", "RNAM", "RNAVAL", "ROHLTD", "ROSSELLIND", "RPGLIFE", "RPOWER", "RPPINFRA", "RRSLGETF", "RSSOFTWARE", "RSWM", "RSYSTEMS", "RTNINFRA", "RTNPOWER", "RUBYMILLS", "RUCHIRA", "RUPA", "RUSHIL", "SABEVENTS", "SADBHAV", "SADBHIN", "SAGARDEEP", "SAGCEM", "SAIL", "SAKSOFT", "SAKUMA", "SALASAR", "SALONA", "SALORAINTL", "SALSTEEL", "SALZERELEC", "SAMBHAAV", "SANCO", "SANDESH", "SANDHAR", "SANGAMIND", "SANGHIIND", "SANGHVIFOR", "SANGHVIMOV", "SANOFI", "SANWARIA", "SARDAEN", "SAREGAMA", "SARLAPOLY", "SASKEN", "SASTASUNDR", "SATIN", "SBIETFQLTY", "SBILIFE", "SBIN", "SCHAEFFLER", "SCHAND", "SCHNEIDER", "SCI", "SDBL", "SEAMECLTD", "SELAN", "SEPOWER", "SEQUENT", "SESHAPAPER", "SETCO", "SETF10GILT", "SETFGOLD", "SETFNIF50", "SETFNIFBK", "SETFNN50", "SFL", "SGL", "SHAHALLOYS", "SHAKTIPUMP", "SHALBY", "SHALPAINTS", "SHANKARA", "SHANTIGEAR", "SHARDACROP", "SHARDAMOTR", "SHARIABEES", "SHEMAROO", "SHILPAMED", "SHIVAMAUTO", "SHIVAMILLS", "SHIVATEX", "SHK", "SHOPERSTOP", "SHREECEM", "SHREEPUSHK", "SHREERAMA", "SHREYANIND"];

var consolidatedArray = ["SHREYAS", "SHRIRAMCIT", "SHRIRAMEPC", "SHYAMCENT", "SHYAMTEL", "SICAGEN", "SICAL", "SIEMENS", "SIGIND", "SILINV", "SIMBHALS", "SIMPLEXINF", "SINTEX", "SIS", "SIYSIL", "SJVN", "SKFINDIA", "SKIPPER", "SKMEGGPROD", "SMARTLINK", "SMLISUZU", "SMSLIFE", "SMSPHARMA", "SNOWMAN", "SOBHA", "SOLARA", "SOLARINDS", "SOMANYCERA", "SOMICONVEY", "SONATSOFTW", "SORILINFRA", "SOTL", "SOUTHBANK", "SPAL", "SPARC", "SPECIALITY", "SPENCERS", "SPIC", "SPLIL", "SPMLINFRA", "SPTL", "SQSBFSI", "SREEL", "SREINFRA", "SRF", "SRHHYPOLTD", "SRIPIPES", "SRTRANSFIN", "SSWL", "STAR", "STARCEMENT", "STARPAPER", "STCINDIA", "STEELXIND", "STEL", "STERTOOLS", "STRTECH", "SUBEX", "SUBROS", "SUDARSCHEM", "SUMEETINDS", "SUMMITSEC", "SUNCLAYLTD", "SUNDARAM", "SUNDARMFIN", "SUNDARMHLD", "SUNDRMBRAK", "SUNDRMFAST", "SUNFLAG", "SUNPHARMA", "SUNTECK", "SUNTV", "SUPERHOUSE", "SUPERSPIN", "SUPPETRO", "SUPRAJIT", "SUPREMEIND", "SUPREMEINF", "SURANASOL", "SURANAT&P", "SURYALAXMI", "SURYAROSNI", "SUTLEJTEX", "SUVEN", "SUZLON", "SWANENERGY", "SWARAJENG", "SWELECTES", "SYMPHONY", "SYNDIBANK", "SYNGENE", "TAINWALCHM", "TAJGVK", "TAKE", "TALBROAUTO", "TALWALKARS", "TALWGYM", "TANLA", "TARAPUR", "TARMAT"]

var consolidatedArray = ["TASTYBITE", "TATACHEM", "TATACOFFEE", "TATACOMM", "TATAELXSI", "TATAGLOBAL", "TATAINVEST", "TATAMETALI", "TATAMOTORS", "TATAMTRDVR", "TATAPOWER", "TATASPONGE", "TATASTEEL", "TBZ", "TCI", "TCIDEVELOP", "TCIEXP", "TCIFINANCE", "TCNSBRANDS", "TCPLPACK", "TCS", "TDPOWERSYS", "TEAMLEASE", "TECHM", "TECHNOE", "TECHNOFAB", "TEJASNET", "TERASOFT", "TEXINFRA", "TEXMOPIPES", "TEXRAIL", "TFCILTD", "TFL", "TGBHOTELS", "THANGAMAYL", "THEINVEST", "THEMISMED", "THERMAX", "THOMASCOOK", "THYROCARE", "TI", "TIDEWATER", "TIFIN", "TIIL", "TIINDIA", "TIJARIA", "TIL", "TIMESGTY", "TIMETECHNO", "TIMKEN", "TINPLATE", "TIPSINDLTD", "TIRUMALCHM", "TITAN", "TMRVL", "TNPETRO", "TNPL", "TOKYOPLAST", "TORNTPHARM", "TORNTPOWER", "TPLPLASTEH", "TREJHARA", "TRENT", "TRF", "TRIDENT", "TRIGYN", "TRIL", "TRITURBINE", "TRIVENI", "TTKHLTCARE", "TTKPRESTIG", "TTL", "TTML", "TV18BRDCST", "TVSELECT", "TVSMOTOR", "TVSSRICHAK", "TVTODAY", "TWL", "UBL", "UCALFUEL", "UCOBANK", "UFLEX", "UFO", "UGARSUGAR", "UJAAS", "UJJIVAN", "ULTRACEMCO", "UMANGDAIRY", "UMESLTD", "UNICHEMLAB", "UNIENTER", "UNIONBANK", "UNIPLY", "UNITEDBNK", "UNITEDTEA", "UNIVCABLES", "UPL", "URJA", "USHAMART"]

var consolidatedArray = ["UTINEXT50", "UTINIFTETF", "UTISENSETF", "UTISXN50", "UTTAMSTL", "UTTAMSUGAR", "V2RETAIL", "VADILALIND", "VAIBHAVGBL", "VAKRANGEE", "VARDHACRLC", "VARDMNPOLY", "VARROC", "VASCONEQ", "VASWANI", "VBL", "VEDL", "VENKEYS", "VENUSREM", "VESUVIUS", "VETO", "VGUARD", "VHL", "VIDHIING", "VIJIFIN", "VIKASECO", "VIMTALABS", "VINATIORGA", "VINDHYATEL", "VINYLINDIA", "VIPCLOTHNG", "VIPIND", "VISAKAIND", "VISASTEEL", "VISHNU", "VIVIDHA", "VIVIMEDLAB", "VLSFINANCE", "VMART", "VOLTAMP", "VOLTAS", "VRLLOG", "VSSL", "VSTIND", "VSTTILLERS", "VTL", "WABAG", "WABCOINDIA", "WALCHANNAG", "WEBELSOLAR", "WEIZFOREX", "WEIZMANIND", "WELCORP", "WELENT", "WELINV", "WELSPUNIND", "WENDT", "WHEELS", "WHIRLPOOL", "WILLAMAGOR", "WINDMACHIN", "WIPRO", "WOCKPHARMA", "WONDERLA", "WSTCSTPAPR", "XCHANGING", "XELPMOC", "XPROINDIA", "YESBANK", "ZEEL", "ZEELEARN", "ZEEMEDIA", "ZENITHEXPO", "ZENSARTECH", "ZENTEC", "ZODIACLOTH", "ZODJRDMKJ", "ZUARI", "ZUARIGLOB", "ZYDUSWELL"]



String.prototype.beginsWith = function (string) {
    return(this.indexOf(string) === 0);
};


var lifeDetectionStart = false;
var lifeCount = 0;
var lifeArray=[];
var lifeArrayTrend =[];
var lifeDetectionStopLoss = 0;
var lifeDetectionBPB= false;
var lifeSaved = false;
var lifeEnable = false;
var lifeStopLossArray =[];
var lifeTradeType =0;
var lifeBetterEntry = false;
var betterEntryPercentage = 7;
var permissibleBetterTradeLimit = 10;
var lifeBetterEntryCriticalLevel = 0;
var lifeSidewaysFormationDate = 0;
var maxLossPermitted =12;




var tradeStartDate ;
var tradeDateStartedDate = false;
var tradeStartedStopLoss ;
var tradeStopLoss = 0;
var tradeDiff = false;

var tradeStartDate ;
var tradeEndDate;
var entryPrice;
var exitPrice;
var profitType;

var mainArray = [];

var totalBuyCallArray = [];
var triggeredBuyCallArray = [];



 var myInterval;
 var getDataInterval;


var crudearr = [];
var nicklearr = [];

var kiteCrude = [];

var kiteNickle = [];

var kiteCrude11 =  [];


var traderJiCrude =  [];


var dataSet;
var val = 1;


//var factor = 0.90;

var factor = 0.10;



var currentScripName;
var detectCount = 0;

var detectStatus= undefined;


let count = 0;
let countnifty = 1;
let countnickle = 1;
let access_token_const = 0;
let startTime = 0;
let startingTime = 0;




//////////////////////////
var traderJiFinaldata;
var crudelongtrade = false;
var crudeshorttrade = false;
var crudeStop = 0;
var crudeTarget = 0;
var crudeTradeStatus = 'not started';
var crudeTradePrice = 0;
var crudeNetProfit = 0;
var crudeTrendLen = 0;
var crudePivot = 0;
var crudeBigTradePrice = 0;
var crudeBigTradeDirection = '';
//var crudeStopVal = 8 ;
//var crudeStopVal = 10 ;
var crudeStopVal = 15 ;
var crudeMinTarget = 22;
var crudeMaxEntryThreshold = 12;
var crudeBigDayTarget = 35;
var crudeBigDayStop = 22;
var crudeVigilValue = 13;
var crudeTradeManagement = false;
var trailingStatus = false;
var trailBigTarget = 90;
var trailTolerableDiff = 10;
var bigPermissiblePriceDiff = 10;
var sidewaysTop = 0;
var sidewaysBottom = 0;
var sidewaysBlackLine = 0;
var crudeTrailManagementValue = 30;
var crudeTrailStopPermitted= 17;
var trailMimimumTarget = 40;
var safeTrailMimimumTarget = 0;
//var minimumSwingLength = 40;
var minimumSwingLength = 70;
var crudeTradePriceLM =0;
var crudeStopLM =0;
var crudeTargetLM = 0;
var minimumStopLM = 10;
var crudeLMManagement = false;
var minTargetLM = 35;
var lmMinimumSidewaysHeight = 15;
var permissibleStopLM = 10;
var lmMaximumSwingLength = 60;
var minimumTragetLM = 30;
var trailPermissibleStopLM = 5;
var maxPermissibleTarget = 30;
var currentprevdata = 0;
var prevdata = 0;
var tailHeightVigilValue = 0.3;
// var minStopLoss = 5;
var minStopLoss = 10;
//var vigilStopLossVal = 7;
var vigilStopLossVal = 5;
var currentSwingHigh= 0;
var currentSwingTradeDirection = '';
var awesomeBuyTrade = false;
 var primaryid;

//////////////////////////


//////////////////////////
var nicklelongtrade = false;
var nickleshorttrade = false;
var nickleStop = 0;
var nickleTarget = 0;
var nickleTradeStatus = 'not started';
var nickleTradePrice = 0;
var nickleNetProfit = 0;
var nickleTrendLen = 0;
var nicklePivot = 0;
var nickleBigTradePrice = 0;
var nickleBigTradeDirection = '';
var nickleStopVal = 2 ;
var nickleMinTarget = 4;
var nickleMaxEntryThreshold = 1;
var nickleBigDayTarget = 35;
var nickleBigDayStop = 20;
var nickleVigilValue = 3;
//////////////////////////



//let webSocketClicked = false;

let webSocketClicked = true;



export class YearlyBPB extends Component {


    constructor(props) {
        super(props);
        this.state = {
            token: '',
            timecount: 0,
            tickdata: '',
            pivotpoint: 0,
            minPivot: 0,
            maxPivot: 0,
            sidewaysCount: 0,
            minblackpivot: 0,
            maxblackpivot: 0,
            tradeTime: 0,
            pivotpointNifty: 0,
            crudeshorttrade: false,
            crudelongtrade: false,
            niftylongtrade: false,
            niftyshorttrade: false,
            nicklelongtrade: false,
            nickleshorttrade: false,
            pivotpointnickle: 0,
            inputValue: '', 

        }

        this.updateInputValue = this.updateInputValue.bind(this);
        this.processData = this.processData.bind(this);

        this.getFinalDataAlphaVantage = this.getFinalDataAlphaVantage.bind(this);
        this.populatingCrudeTickdata = this.populatingCrudeTickdata.bind(this);


        this.startAwesomeFunction = this.startAwesomeFunction.bind(this);



        
        
    }

     updateInputValue(evt) {
               this.setState({
                 inputValue: evt.target.value
                });


    }

    processData(){

           myInterval = setInterval(function(){

                //clear both add tick data and plot data


                if(detectStatus == true || detectStatus == undefined){
                           
                                //this.props.removeAlphadata();
                                 this.props.removeTickData();
                                 this.props.removePlotdatatest();
                               
                                    //changes
                                               crudelongtrade = false;
                                               crudeshorttrade = false;
                                               crudeTarget = 0;
                                               crudeStop = 0;
                                               crudeTradePrice = 0;
                                               crudePivot = 0;
                                               crudeTradeStatus = "start again";
                                               crudeTradePriceLM = 0;
                                               crudeStopLM = 0;
                                               crudeTargetLM = 0;
                                               crudeLMManagement = false;

                                             lifeDetectionStart=false;
                                            lifeBetterEntryCriticalLevel= 0;
                                             lifeArray=[];
                                             lifeBetterEntry=false;
                                             lifeTradeType=0;
                                             lifeCount=0;
                                             lifeArrayTrend=[];
                                             lifeDetectionStopLoss=0;
                                             lifeDetectionBPB=false;
                                             lifeSaved= false;
                                             lifeEnable= false;
                                             lifeCount = 0;
                                             lifeStopLossArray =[];
                                    //changes

                        detectStatus = false;
                        detectCount = detectCount+1;
                       

                        if(detectCount >= 500 && detectCount < 1000){
                         //  primaryid = "B1A31LJSJBKKJR49";
                           primaryid = "DD6CIWEZWM05YAS8";
                        }
                        else if(detectCount >= 1000){
                            primaryid = "DD6CIWEZWM05YAS8";
                        }
                        else{
                            primaryid = "5WEHKKBE5EQPL57C";
                            //primaryid = "B1A31LJSJBKKJR49";
                        }

                        currentScripName = consolidatedArray.splice(0, 1);


                            console.log('Analyzing new stock .............' + currentScripName );

                        setTimeout(function(){
                               // console.log('ashu');
                                 //
                                 tradeDiff = false;
                                 tradeDateStartedDate = [];
                                 tradeStartedStopLoss = 0;
                                 crudeLMManagement = false;
                                 crudeTradePriceLM = 0;
                                 crudeStopLM = 0;
                                 crudeTargetLM = 0;

                                 //99
                                 lifeDetectionStart=false;
                                 lifeBetterEntryCriticalLevel= 0;
                                 lifeArray=[];
                                 lifeBetterEntry=false;
                                 lifeTradeType=0;
                                 lifeCount=0;
                                 lifeArrayTrend=[];
                                 lifeDetectionStopLoss=0;
                                 lifeDetectionBPB=false;
                                 lifeSaved= false;
                                 lifeEnable= false;
                                 lifeCount = 0;
                                 lifeStopLossArray =[];

                                 //99

                                 this.props.saveMainArray(mainArray);



                                 this.props.getAlphaData(currentScripName,primaryid );
                                 this.props.saveTotalBuyArray(totalBuyCallArray);
                                 this.props.saveTriggeredBuyArray(triggeredBuyCallArray);


                                 console.log('main array is' + JSON.stringify(mainArray));
                                 console.log('buy call cumulative is ' + JSON.stringify(totalBuyCallArray));
                                 console.log('triggered call  array is' + JSON.stringify(triggeredBuyCallArray));

                        }.bind(this) , 7000);
                }

            }.bind(this) ,2000);

    }


    startAwesomeFunction(){

               /* dataSet.map((v, i) => {

                   v.open = parseInt(v.open*val);
                   parseFloat(v.low) = parseInt(parseFloat(v.low)*val);
                   parseFloat(v.close) = parseInt(parseFloat(v.close)*val);
                   parseFloat(v.high) = parseInt(parseFloat(v.high)*val);
                   v.tradedate = parseInt(v.Local);
                  traderJiCrude.push(v);

                });*/
             
              this.props.removeAlphadata();
              this.props.removeTickData();
              this.props.removePlotdatatest();
              
              count = 0;

             if(consolidatedArray.length == 0){
                 clearInterval(myInterval);
              }

             //detectStatus = true;

            
             if(dataSet !== "Error"){
                        detectStatus = true ;
                        if(dataSet["Time Series (Daily)"] !== undefined && dataSet["Time Series (Daily)"] !== ''){
                             var traderJiFinaldata = this.getFinalDataAlphaVantage(dataSet["Time Series (Daily)"]);
                            this.populatingCrudeTickdata(traderJiFinaldata);
                        }
             }

             if(dataSet == "Error"){
                 this.props.getAlphaData(currentScripName,primaryid );
                 detectStatus = false;

             }

             

             

    }

    getFinalDataAlphaVantage(data){


           

            var accounting = [];

           // 

            var mytraderJiFinaldata = Object.values(data).reverse().splice(parseInt(Object.values(data).length*factor), Object.values(data).length-1);
             
           // 
         
            var counter = Object.values(mytraderJiFinaldata).length-1;

            mytraderJiFinaldata.map((v ,i ) => {

                    accounting.push({ 
                         "open" : v["1. open"],
                         "high" : v["2. high"],
                         "low"  : v["3. low"] ,
                         "close" : v["4. close"],
                         "date" : Object.keys(data)[counter],
                    });

                    counter = counter - 1;


             });
            return accounting;
        }


        populatingCrudeTickdata(response) {
             
             var d = this;
             var oldDate = 0;
             var newDateStart = 0;
             var startFresh = 0;

            response.map((v, i, response) => {

              


                var crudetickType;
                var startDetecting = false;
                var shift = 0;
                var stop = 0;
                var target = 0;

                if (v.open < parseFloat(v.close)) {
                    crudetickType = "green";
                } else if (v.open > parseFloat(v.close)) {
                    crudetickType = "red";
                } else if (v.open = parseFloat(v.close)) {
                    crudetickType = "doji";


                }




                    var crudetickLength = Math.abs(parseFloat(v.high) - parseFloat(v.low));

                   


               
                        if( tradeDateStartedDate.indexOf(v.date) !== -1 && (crudeTradeStatus !== "buy started") ){



                                       var lovelyDiff  = Math.abs(parseFloat(v.open) - parseFloat(tradeStartedStopLoss));
                                       var lovelyDiffRatio = (lovelyDiff/parseFloat(tradeStartedStopLoss))*100;

                                        console.log('lovely diff ratio... ' +  lovelyDiffRatio);

                                        if(lovelyDiffRatio <= 17){
                                           lifeDetectionStart= false;
                                           crudelongtrade = true;
                                           crudeLMManagement = "long";
                                           crudeTradeStatus = "buy started";
                                           crudeshorttrade = false;
                                           crudeTradePriceLM = parseFloat(v.open);
                                           crudeTargetLM = parseFloat(parseFloat(v.open*1.07).toFixed(2));
                                           crudeStopLM =  parseFloat(parseFloat(tradeStartedStopLoss*0.97).toFixed(2));
                                        }
                                        else{
                                             console.log('This buy trade is failed..  not taking long here....');
                                             tradeDiff = false;
                                             tradeDateStartedDate = [];
                                             tradeStartedStopLoss = 0;
                                             crudeLMManagement = false;
                                             crudeTradePriceLM = 0;
                                             crudeStopLM = 0;
                                             crudeTargetLM = 0;


                                                 //99
                                             lifeDetectionStart=false;
                                             lifeBetterEntryCriticalLevel= 0;
                                             lifeArray=[];
                                             lifeBetterEntry=false;
                                             lifeTradeType=0;
                                             lifeCount=0;
                                             lifeArrayTrend=[];
                                             lifeDetectionStopLoss=0;
                                             lifeDetectionBPB=false;
                                             lifeSaved= false;
                                             lifeEnable= false;
                                             lifeCount = 0;
                                 //99
                                        }
                                            

                                       
                                       //
                        }





                    if(crudeStopLM > parseFloat(parseFloat(v.low)) && crudeStopLM < parseFloat(parseFloat(v.high)) && crudeLMManagement !== false){
                             
                             /* if(crudeLMManagement == "short"){
                                   if(crudeStopLM >= crudeTradePriceLM){
                                      console.log('loss happened of point' + Math.abs(crudeStopLM-crudeTradePriceLM));
                                      crudeNetProfit = crudeNetProfit-Math.abs(crudeStopLM-crudeTradePriceLM);

                                   }
                                   else if(crudeStopLM < crudeTradePriceLM){
                                     console.log('profit happened of point' + Math.abs(crudeStopLM-crudeTradePriceLM));
                                     crudeNetProfit = crudeNetProfit+Math.abs(crudeStopLM-crudeTradePriceLM);
                                   }

                              }
                              else*/
                               if(crudeLMManagement == "long"){
                                    
                                   if(crudeStopLM <= crudeTradePriceLM){

                                       // 
                                     /* tradeStartDate = tradeDateStartedDate;
                                      tradeEndDate = v.date;
                                      entryPrice = crudeTradePriceLM ;
                                      exitPrice = crudeTargetLM ;
                                      profitType = "loss";*/
                                      


                                     var priceDiff = Math.abs(crudeStopLM - crudeTradePriceLM);
                                     var priceDiffRatio = (priceDiff/crudeTradePriceLM)*100;

                                   

                                      mainArray.push({
                                       stock : currentScripName[0],
                                       tradeType:lifeTradeType,
                                       tradeStartDate :tradeDateStartedDate[0],
                                       tradeEndDate:  v.date,
                                       entryPrice:crudeTradePriceLM,
                                       exitPrice:crudeStopLM,
                                       profitType: 'loss',
                                       percentage : parseFloat(priceDiffRatio.toFixed(2)),
                                      });

                                      crudeTradeStatus = "start again";

                                         tradeDiff = false;
                                         tradeDateStartedDate = [];
                                         tradeStartedStopLoss = 0;
                                         crudeLMManagement = false;
                                         crudeTradePriceLM = 0;
                                         crudeStopLM = 0;
                                         crudeTargetLM = 0;


                                           crudelongtrade = false;
                                           crudeshorttrade = false;
                                           crudeTarget = 0;
                                           crudeStop = 0;
                                           crudeTradePrice = 0;
                                           crudePivot = 0;
                                           crudeNetProfit = crudeNetProfit-losspoint;
                                           crudeTradeStatus = "start again";
                                           crudeTradePriceLM = 0;
                                           crudeStopLM = 0;
                                           crudeTargetLM = 0;
                                           crudeLMManagement = false;

                                          //99
                                         lifeDetectionStart=false;
                                        lifeBetterEntryCriticalLevel= 0;
                                         lifeArray=[];
                                        lifeBetterEntry=false;
                                         lifeTradeType=0;
                                         lifeCount=0;
                                         lifeArrayTrend=[];
                                         lifeDetectionStopLoss=0;
                                         lifeDetectionBPB=false;
                                         lifeSaved= false;
                                         lifeEnable= false;
                                         lifeCount = 0;
                                 //99



                                      console.log('loss happened of point 1 ' + Math.abs(crudeStopLM-crudeTradePriceLM));
                                      crudeNetProfit = crudeNetProfit-Math.abs(crudeStopLM-crudeTradePriceLM);
                                   }
                                   else if(crudeStopLM > crudeTradePriceLM){

                                  
                                      /*tradeStartDate = tradeDateStartedDate;
                                      tradeEndDate = v.date;
                                      entryPrice = crudeTradePriceLM ;
                                      exitPrice = crudeTargetLM ;
                                      profitType = "win";*/
                                      //

                                      var priceDiff = Math.abs(crudeTargetLM - crudeTradePriceLM);
                                     var priceDiffRatio = (priceDiff/crudeTradePriceLM)*100;

                                   

                                      mainArray.push({
                                       stock : currentScripName[0],
                                       tradeType: lifeTradeType,
                                       tradeStartDate :tradeDateStartedDate[0],
                                       tradeEndDate:  v.date,
                                       entryPrice:crudeTradePriceLM,
                                       exitPrice:crudeTargetLM,
                                       profitType: 'win',
                                       percentage : parseFloat(priceDiffRatio.toFixed(2)),
                                      });


                                      crudeTradeStatus = "start again";


                                     
                                     console.log('profit happened of point 1 ' + Math.abs(crudeStopLM-crudeTradePriceLM));
                                     crudeNetProfit = crudeNetProfit+Math.abs(crudeStopLM-crudeTradePriceLM);



                                 tradeDiff = false;
                                 tradeDateStartedDate = [];
                                 tradeStartedStopLoss = 0;
                                 crudeLMManagement = false;
                                 crudeTradePriceLM = 0;
                                 crudeStopLM = 0;
                                 crudeTargetLM = 0;

                                     //99
                                                               lifeDetectionStart=false;
                                 lifeBetterEntryCriticalLevel= 0;
                                 lifeArray=[];
                                 lifeBetterEntry=false;
                                 lifeTradeType=0;
                                 lifeCount=0;
                                 lifeArrayTrend=[];
                                 lifeDetectionStopLoss=0;
                                 lifeDetectionBPB=false;
                                 lifeSaved= false;
                                 lifeEnable= false;
                                 lifeCount = 0;
                                 //99

                                   }

                              }

                              crudeLMManagement = false;
                              crudeTradePriceLM = 0;
                              crudeStopLM = 0;
                              crudeTargetLM = 0;
                     }

                     //crudeTargetLM

                    if(parseFloat(crudeTargetLM)> parseFloat(parseFloat(v.low)) && parseFloat(crudeTargetLM) <= parseFloat(parseFloat(v.high)) && crudeLMManagement !== false){
                             
                                /*if(crudeLMManagement == "short"){
                                     
                                     console.log('profit happened of point 2' + Math.abs(crudeTradePriceLM-crudeTargetLM));
                                     crudeNetProfit = crudeNetProfit-Math.abs(crudeTargetLM-crudeTradePriceLM);
                                }
                                else */
                                if(crudeLMManagement == "long"){

                                      /*tradeStartDate = tradeDateStartedDate;
                                      tradeEndDate =   v.date;
                                      entryPrice =     crudeTradePriceLM ;
                                      exitPrice =      crudeTargetLM ;
                                      profitType =     "win";*/

                                     var priceDiff = Math.abs(crudeTargetLM - crudeTradePriceLM);
                                     var priceDiffRatio = (priceDiff/crudeTradePriceLM)*100;

                                    

                                      mainArray.push({
                                       stock : currentScripName[0],
                                       tradeType: lifeTradeType,
                                       tradeStartDate :tradeDateStartedDate[0],
                                       tradeEndDate:  v.date,
                                       entryPrice:crudeTradePriceLM,
                                       exitPrice:crudeTargetLM,
                                       profitType: 'win',
                                       percentage : parseFloat(priceDiffRatio.toFixed(2)),
                                      });

                                      crudeTradeStatus = "start again";

                                      
                                    
                                      console.log('profit happened of point 2 ' + Math.abs(crudeTargetLM-crudeTradePriceLM));
                                      crudeNetProfit = crudeNetProfit+Math.abs(crudeTargetLM-crudeTradePriceLM);



                                 tradeDiff = false;
                                 tradeDateStartedDate = [];
                                 tradeStartedStopLoss = 0;
                                 crudeLMManagement = false;
                                 crudeTradePriceLM = 0;
                                 crudeStopLM = 0;
                                 crudeTargetLM = 0;


                                     //99
                                 lifeDetectionStart=false;
                                 lifeBetterEntryCriticalLevel= 0;
                                 lifeArray=[];
                                 lifeBetterEntry=false;
                                 lifeTradeType=0;
                                 lifeCount=0;
                                 lifeArrayTrend=[];
                                 lifeDetectionStopLoss=0;
                                 lifeDetectionBPB=false;
                                 lifeSaved= false;
                                 lifeEnable= false;
                                 lifeCount = 0;
                                 //99


                                }

                                crudeLMManagement = false;
                                crudeTradePriceLM = 0;
                                crudeStopLM = 0;
                                crudeTargetLM = 0;
                    }



                    if (crudeLMManagement !== false) {

                       
                       if(parseFloat(parseFloat(v.low) )<= crudeTargetLM && crudeTargetLM < parseFloat(parseFloat(v.high))){
                                crudeTradeStatus = "profit";
                                var prof = Math.abs(crudeTradePriceLM - crudeTargetLM);

                                  

                                     var priceDiff = Math.abs(crudeTargetLM - crudeTradePriceLM);
                                     var priceDiffRatio = (priceDiff/crudeTradePriceLM)*100;

                                  

                                      mainArray.push({
                                       stock : currentScripName[0],
                                       tradeType: lifeTradeType,
                                       tradeStartDate :tradeDateStartedDate[0],
                                       tradeEndDate:  v.date,
                                       entryPrice:crudeTradePriceLM,
                                       exitPrice:crudeTargetLM,
                                       profitType: 'win',
                                       percentage : parseFloat(priceDiffRatio.toFixed(2)),
                                      })



                                console.log('loss managemnt  PROFIT :) happened of' + prof);
                                crudelongtrade = false;
                                crudeshorttrade = false;
                                crudeTarget = 0;
                                crudeStop = 0;
                                crudeTradePrice = 0;
                                crudePivot = 0;
                                crudeNetProfit = crudeNetProfit+60;
                                crudeTradeStatus = "start again";
                                crudeTradeManagement = false;
                                crudeTargetLM = 0;
                                crudeTradePriceLM = 0;
                                crudeStopLM = 0;
                                crudeLMManagement = false;



                                     //99
                                                               lifeDetectionStart=false;
lifeBetterEntryCriticalLevel= 0;
                                 lifeArray=[];
                                lifeBetterEntry=false;
                                 lifeTradeType=0;
                                 lifeCount=0;
                                 lifeArrayTrend=[];
                                 lifeDetectionStopLoss=0;
                                 lifeDetectionBPB=false;
                                 lifeSaved= false;
                                 lifeEnable= false;
                                 lifeCount = 0;
                                 //99
                         }
                          else if (parseFloat(parseFloat(v.low)) < crudeStopLM && crudeStopLM < parseFloat(parseFloat(v.high))){
                                   
                                   
                                     var priceDiff = Math.abs(crudeStopLM - crudeTradePriceLM);
                                     var priceDiffRatio = (priceDiff/crudeTradePriceLM)*100;

                                  /*   this.props.saveMainArray({
                                       stock : currentScripName[0],
                                       tradeType: lifeTradeType,
                                       tradeStartDate :tradeDateStartedDate[0],
                                       tradeEndDate:  v.date,
                                       entryPrice:crudeTradePriceLM,
                                       exitPrice:crudeStopLM,
                                       profitType: 'loss',
                                       percentage : parseFloat(priceDiffRatio.toFixed(2)),
                                     });*/

                                      mainArray.push({
                                       stock : currentScripName[0],
                                       tradeType: lifeTradeType,
                                       tradeStartDate :tradeDateStartedDate[0],
                                       tradeEndDate:  v.date,
                                       entryPrice:crudeTradePriceLM,
                                       exitPrice:crudeStopLM,
                                       profitType: 'loss',
                                       percentage : parseFloat(priceDiffRatio.toFixed(2)),
                                      })

                                   crudeTradeStatus = "loss";
                                   var losspoint = crudeTradePriceLM - crudeStopLM;
                                   console.log('loss management LOSS :( hapeended' + i);
                                   crudelongtrade = false;
                                   crudeshorttrade = false;
                                   crudeTarget = 0;
                                   crudeStop = 0;
                                   crudeTradePrice = 0;
                                   crudePivot = 0;
                                   crudeNetProfit = crudeNetProfit-losspoint;
                                   crudeTradeStatus = "start again";
                                   crudeTradePriceLM = 0;
                                   crudeStopLM = 0;
                                   crudeTargetLM = 0;
                                   crudeLMManagement = false;


                                     //99
                                 lifeDetectionStart=false;
lifeBetterEntryCriticalLevel= 0;
                                 lifeArray=[];
                                lifeBetterEntry=false;
                                 lifeTradeType=0;
                                 lifeCount=0;
                                 lifeArrayTrend=[];
                                 lifeDetectionStopLoss=0;
                                 lifeDetectionBPB=false;
                                 lifeSaved= false;
                                 lifeEnable= false;
                                 lifeCount = 0;
                                 //99

                        }
                        
                    }



             /*   if ((crudelongtrade == true || crudeTradeStatus == "vigil" || crudeshorttrade == true ) && (crudeStop !== 0 && crudeTarget !== 0)) {
                   // 
                 //   console.log('inside short');
                    startDetecting = true;
                    stop = crudeStop;
                    target = crudeTarget;


                    if (parseFloat(v.low) < stop && stop < parseFloat(v.high) && crudeTradeStatus !== "vigil" && crudeTradeManagement != "trailing" && crudeTradeManagement != "trailing end" && crudeLMManagement == false) {

                        
                                     var priceDiff = Math.abs(stop - crudeTradePrice);
                                     var priceDiffRatio = (priceDiff/crudeTradePrice)*100;

                                      mainArray.push({
                                       stock : currentScripName[0],
                                        year :new Date(tradeDateStartedDate).getYear(),
                                        month: new Date(tradeDateStartedDate).getMonth(),
                                        tradeType: lifeTradeType,
                                       tradeStartDate :tradeDateStartedDate,
                                       tradeEndDate:  v.date,
                                       entryPrice:crudeTradePrice,
                                       exitPrice:stop,
                                       profitType: 'loss',
                                       percentage : parseFloat(priceDiffRatio.toFixed(2)),
                                      });


                        crudeTradeStatus = "loss";
                        var losspoint = Math.abs(crudeTradePrice - stop);
                        console.log('loss hapeended' + losspoint);
                        crudeNetProfit = crudeNetProfit-losspoint;
                        crudelongtrade = false;
                        crudeshorttrade = false;
                        crudeTarget = 0;
                        crudeStop = 0;
                        crudeTradePrice = 0;
                        crudePivot = 0;
                        //crudeNetProfit = crudeNetProfit - losspoint;
                        crudeTradeStatus = "start again";

                            //99
                                                               lifeDetectionStart=false;
lifeBetterEntryCriticalLevel= 0;
                                 lifeArray=[];
 lifeBetterEntry=false;
                                 lifeTradeType=0;
                                 lifeCount=0;
                                 lifeArrayTrend=[];
                                 lifeDetectionStopLoss=0;
                                 lifeDetectionBPB=false;
                                 lifeSaved= false;
                                 lifeEnable= false;
                                 lifeCount = 0;
                                 //99


                                 tradeDiff = false;
                                 tradeDateStartedDate = [];
                                tradeStartedStopLoss = 0;
                                 crudeLMManagement = false;
                                 crudeTradePriceLM = 0;
                                 crudeStopLM = 0;
                                 crudeTargetLM = 0;
                        //crudeTradeManagement = "trailing end";
                    } else if (parseFloat(v.low) <= target && target <= parseFloat(v.high) && crudeTradeStatus !== "vigil" && crudeTradeManagement != "trailing" && crudeTradeManagement != "trailing end" && crudeLMManagement == false) {
                        crudeTradeStatus = "profit";
                        var profitpoint = Math.abs(crudeTradePrice - target);
                        //console.log('bonu');
                       // alert('sonu');


                                     var priceDiff = Math.abs(target - crudeTradePrice);
                                     var priceDiffRatio = (priceDiff/crudeTradePrice)*100;

                                      mainArray.push({
                                       stock : currentScripName[0],
                                        year :new Date(tradeDateStartedDate).getYear(),
                                        month: new Date(tradeDateStartedDate).getMonth(),
                                        tradeType: lifeTradeType,

                                       tradeStartDate :tradeDateStartedDate,
                                       tradeEndDate:  v.date,
                                       entryPrice:crudeTradePrice,
                                       exitPrice:target,
                                       profitType: 'win',
                                       percentage : parseFloat(priceDiffRatio.toFixed(2)),
                                      })
                       
                        
                        console.log('profit happened of' + profitpoint);
                        crudelongtrade = false;
                        crudeshorttrade = false;
                        crudeTarget = 0;
                        crudeStop = 0;
                        crudeTradePrice = 0;
                        crudePivot = 0;
                        crudeNetProfit = crudeNetProfit + profitpoint;
                        crudeTradeStatus = "start again";
                        //crudeTradeManagement = "trailing end";


                                 tradeDiff = false;
                                 tradeDateStartedDate = [];
tradeStartedStopLoss = 0;
                                 crudeLMManagement = false;
                                 crudeTradePriceLM = 0;
                                 crudeStopLM = 0;
                                 crudeTargetLM = 0;

                                     //99
                                                               lifeDetectionStart=false;
lifeBetterEntryCriticalLevel= 0;
                                 lifeArray=[];
 lifeBetterEntry=false;
                                 lifeTradeType=0;
                                 lifeCount=0;
                                 lifeArrayTrend=[];
                                 lifeDetectionStopLoss=0;
                                 lifeDetectionBPB=false;
                                 lifeSaved= false;
                                 lifeEnable= false;
                                 lifeCount = 0;
                                 //99

                    }

                }*/

              
               
              
               //

            if(v.open !== 0 && parseFloat(v.close) !== 0 && parseFloat(v.high) !== 0 && parseFloat(v.low) !== 0){
                 
                    var crudetickarray = {
                    "stop": stop,
                    "target": target,
                    "shift": shift,
                    "open": parseFloat(v.open),
                    "low": parseFloat(v.low),
                    "high": parseFloat(v.high),
                    "close": parseFloat(v.close),
                    "tickType": crudetickType,
                    'tickLength': crudetickLength,
                    'date': v.date,
                    "detecting": startDetecting,
                    "tradeStatus" : crudeTradeStatus,
                    'netProfit' : crudeNetProfit,
                    'name' : currentScripName[0],
                    'hasTradeStarted' : tradeDateStartedDate
                };


                //v.date.split(' ')[1];
                this.props.addTickData(crudetickarray);

            }
                

                

                if( i==0 ){
                       

                         var value = 0;
                         if(v.open < parseFloat(v.close)){
                             //up direction
                             value= parseFloat(v.low);
                              
                          }
                          else if(v.open > parseFloat(v.close)){
                               //down direction
                              value= parseFloat(v.high);
                          }
                          else{
                              value= parseFloat(v.high);
                          }

                        let datainput = {
                            x: 0,
                            y: value
                        };
                        this.props.pivotData(datainput);

                        
                }

                // new code to vanish the data after every load


            })

        }


    startGeneratingServerSession() {

        //
        Object.defineProperty(Date.prototype, 'YYYYMMDDHHMMSS', {
            value: function() {
                function pad2(n) { // always returns a string
                    return (n < 10 ? '0' : '') + n;
                }

                return this.getFullYear() + '-' +
                    pad2(this.getMonth() + 1) + '-' +
                    pad2(this.getDate()) + ' ' +
                    pad2(this.getHours()) + ':' +
                    pad2(this.getMinutes()) + ':' +
                    pad2(this.getSeconds());
            }
        });


        startTime = new Date().YYYYMMDDHHMMSS();

        Object.defineProperty(Date.prototype, 'starting', {
            value: function() {
                function pad2(n) { // always returns a string
                    return (n < 10 ? '0' : '') + n;
                }

                return this.getFullYear() + '-' +
                    pad2(this.getMonth() + 1) + '-' +
                    pad2(this.getDate()) + ' ' +
                    '10' + ':' +
                    '30' + ':' +
                    '00';
            }
        });


        startingTime = new Date().starting();



        var ashutosh = this;
        var api_key = "3iciz5hhzaiitjkj",
            secret = "4c0wc0rqnze0hx2c3x9y72tg8wpqbgap",
            request_token = this.state.token;
        let access_token = '';

        var options = {
            "api_key": api_key,
            "debug": false
        };

        let kc = new KiteConnect(options);

        if (!access_token) {
            kc.generateSession(request_token, secret)
                .then(function(response) {
                     access_token_const = response.access_token;
                     init(ashutosh);
                })
                .catch(function(err) {
                     //console.log('error here');
                     //console.log(err);
                     // new code just to check
                     init(ashutosh);
                })
        } else {
           // console.log('else');
            kc.setAccessToken(access_token);

        }

        function initDeribitLogic(access_token_const) {

            // 

            axios.get('http://localhost:4000/ashu', {
                params: {
                    foo: access_token_const
                }
            });

        }


//v.date.substring(11,13)

        
 function init(ref) {

    var a = ref;

    dataSet.map((v, i) => {
     



   // if(i>300){

           v.open = parseInt(v.open*val);
           v.low= parseInt(parseFloat(v.low)*val);
           v.close= parseInt(parseFloat(v.close)*val);
           v.high = parseInt(parseFloat(v.high)*val);
           v.tradedate = parseInt(v.Local);
           traderJiCrude.push(v);
  //  }

        })


    function checkArg(...arg){
           // console.log(arg.indexOf(2));

    };


checkArg(0);


            // var kitedate = '30.10.2018';
             //var kitedate = '2018-09-06';

           //  var kitedate= '20/09/2010';
             var kiteArray = [];

             var zerokiteArray = [];



           /* traderJiCrude.map((v, i) => {
                       if(v.Local.toString().beginsWith(kitedate)) {
                            kiteArray.push(v);
                        }
            });*/

            //
            // kiteArray.splice(781);

           // kiteArray.splice(0,120);

            

          /*  kiteCrude.map((v, i) => {
                        if(v.date.toString().beginsWith(kitedate)) {
                              v.date = v.date.replace('T', ' ').replace('Z','0');
                              zerokiteArray.push(v);
                       }
            });*/


//React.children.map(this.props.children , (child) => {
//.  return React.cloneElement(child, {'onClick' : () => console.log('click me')});
//})

           /*traderJiCrude.map((v, i) => {

                currentprevdata = v.Local.split(' ')[0];

                if(prevdata == 0){
                     prevdata = currentprevdata;
                }
                else if(prevdata !== currentprevdata ){
                    //fire closing if array event

                      
                     prevdata = currentprevdata;
                     ref.props.removePlotdatatest();
                     kiteArray = [];
                }
                else if(prevdata == currentprevdata){
                     //do nothing here
                      kiteArray.push(v);
                }  

                if(kiteArray.length == 287){
                     populatingCrudeTickdata(kiteArray);
                }

            });*/



            
           

            //CODE FOR HANDLING NEW DATA
            var finalArr = [];
            var start = 0;
            var end = 0;
            var detectStart = 0;
            var temparr = [];
            var oldDate = 0;
            var newDate = 0;
            var newDateStart = 0;
 

            //kiteArray.splice(0, 150);
            var newarr = kiteArray;


           /* newarr.map((v, i) => {

                    if( i !== 0 && v.Local.split(' ')[0] !== oldDate ){
                          //start counting again
                    //if( i !== 0 && v.Local !== oldDate ){
                          //;
                          newDateStart = 1;

                    }
                  
                        if(i ==0 ){
                              start = 1;
                              temparr.push(v.Local);
                              temparr.push(v.open);
                              temparr.push(parseFloat(v.low));
                              temparr.push(parseFloat(v.high));
                              temparr.push(parseFloat(v.close));
                             oldDate = v.Local.split(' ')[0];
                             // oldDate = v.Local;
                         }


                        if( i != 0 && (i%5) != 0 ){
                              temparr.push(v.open);
                              temparr.push(parseFloat(v.low));
                              temparr.push(parseFloat(v.high));
                              temparr.push(parseFloat(v.close));
                        }

                        if( i != 0 && (i%5) == 0 && start == 1){
                              finalArr.push(temparr);
                              temparr = [];
                              start = 0;
                        }

                        if( (i != 0 && (i%5) == 0 && start == 0) || newDateStart == 1){
                              

                                                           temparr = []; 
                              temparr.push(v.Local);
                              temparr.push(v.open);
                              temparr.push(parseFloat(v.low));
                              temparr.push(parseFloat(v.high));
                              temparr.push(parseFloat(v.close));
                              start = 1;
                              newDateStart = 0;
                              oldDate = v.Local.split(' ')[0];
                              //oldDate = v.Local;
                        }
            });*/

              


          /*  newarr.map((v, i) => {
                  
                        if(i ==0 ){
                              start = 1;
                              temparr.push(v.open);
                              temparr.push(parseFloat(v.low));
                              temparr.push(parseFloat(v.high));
                              temparr.push(parseFloat(v.close));
                         }


                        if( i != 0 && (i%5) != 0 ){
                              temparr.push(v.open);
                              temparr.push(parseFloat(v.low));
                              temparr.push(parseFloat(v.high));
                              temparr.push(parseFloat(v.close));
                        }

                        if( i != 0 && (i%5) == 0 && start == 1){
                              finalArr.push(temparr);
                              temparr = [];
                              start = 0;
                        }

                        if( i != 0 && (i%5) == 0 && start == 0){
                              temparr.push(v.open);
                              temparr.push(parseFloat(v.low));
                              temparr.push(parseFloat(v.high));
                              temparr.push(parseFloat(v.close));
                              start = 1;
                        }
            });*/


             
            // console.log('final array is' + finalArr);

             ;
           
             // traderJiFinaldat  

             traderJiFinaldata = getFinalDataAlphaVantage(traderJiCrude);
             

             traderJiFinaldata = traderJiCrude.reverse().splice(parseInt(traderJiCrude.length*factor), traderJiCrude.length-1);
            // ;
             
             //populatingCrudeTickdata(traderJiFinaldata);

             // var data = 




       
              //populatingCrudeTickdata(zerokiteArray);

             


             //uncomment it for testing older data
             //kiteArray =  kiteArray.slice(0,kiteArray.length-1);
              
             

            // populatingCrudeTickdata(kiteArray);
             

             //populatingNickleTickdata(kiteArray);
             

        }


        function getFinalDataAlphaVantage(data){

            var accounting = [];

         

            data.map((v ,i ) => {
                     
                    
                 
                   //var date = v.splice(0,1)[0];
                   //var date = v.splice(0,1)[0];

                  // ;
                   var goAhead = true;
                   var crudehigh = parseFloat(v.high);
                   var crudelow = parseFloat(v.low);
                   var crudeopen = v.open;
                   var crudeclose = parseFloat(v.close);
                   var date = v.time;
                   
                   if(crudehigh==crudelow && crudelow==crudeopen && crudehigh==crudeclose){
                        goAhead= false;
                   }

                   if(goAhead == true){
                         accounting.push({ 
                         "open" : crudeopen,
                         "high" : crudehigh,
                         "low"  : crudelow ,
                         "close" : crudeclose,
                         "date" : date,
                    });

                   }

                   


             });
            return accounting;
        }



        function getFinalData(data){

            var accounting = [];

            data.map((v ,i ) => {
                     
                    
                 
                   //var date = v.splice(0,1)[0];
                   var date = v.splice(0,1)[0];

                  // ;
                   var crudehigh = _.maxBy(v);
                   var crudelow = _.minBy(v);
                   var crudeopen = v[0];
                   var crudeclose = v[v.length-1];
                   

                    accounting.push({ 
                         "open" : crudeopen,
                         "high" : crudehigh,
                         "low"  : crudelow ,
                         "close" : crudeclose,
                         "date" : date,
                    });


             });
            return accounting;
        }

        function getHistoricalData(instrument_token, interval, from_date, to_date, continuous) {



            kc.getHistoricalData(instrument_token, interval, from_date, to_date, continuous)
                .then(function(response) {
                    //

                    if (instrument_token === 53835015) {

                      //  
                      //  populatingCrudeTickdata(response);
                    }

                    /* if(instrument_token === 53843463){
                     //coppper
                     //  populatingCrudeTickdata(response);
                     }*/

                     if(instrument_token === 53986823){
                       //nickle

                      // 
                     //  populatingNickleTickdata(response);
                     }


                    //justdial
                    //if(instrument_token === 356865){
                    //

                    //populatingJustDialTickdata(response);

                    //}

                    //console.log(response);
                }).catch(function(err) {
                    //console.log(err);
                });
        }

       


       




         


       

         var nickletickcount = 0,
            nickleticklow = 0,
            nickletickhigh = 0,
            nickletickopen = 0,
            nickletickarray = [],
            nickletickType = 0,
            nickletickLength = 0,
            nickletickclose = 0;

         }


    componentDidMount() {

        //console.log('11');
        let base_url = window.location.host;
        localStorage.setItem('token', this.getUrlParameter('request_token'));
        this.setState({
            token: this.getUrlParameter('request_token')
        });
    }

    onTick(ticks) {
      //  console.log("Ticks", ticks);
    }

    onConnect(d) {
        d.subscribe([53718791]);
        d.setMode(d.modeFull, [53718791]);
    }

    getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        let results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };



    componentWillReceiveProps(nextProps) {
         
         //

         if ((nextProps.alphaData != undefined && Object.keys(nextProps.alphaData).length != 0  )&& (detectStatus == false || detectStatus == undefined)) {

               //

              dataSet = nextProps.alphaData;
              
              
                //this.props.removeTickData();
                //this.props.removePlotdatatest();

              setTimeout(function(){ 
              
                  
                
                this.startAwesomeFunction() 


                  }.bind(this), 5000 );

              

         }

        //console.log('999');d

       
        

        let len = nextProps.tickCombo.length - 1;



        if ((this.props.tickCombo) != undefined) {


                if ((nextProps.tickCombo).length >= 1) {

                    if(nextProps.trendData.length >= 1){//big trend data vaidation starts here


                         if(lifeDetectionStart == true && lifeSaved !== true){
           
                        //console.log('ashu basu' + JSON.stringify(nextProps.trendData));


                        crudeTradeStatus = "life saving started";
                        lifeCount = lifeCount+1;
                        lifeArray.push(nextProps.tickCombo[len].tickType);

                        lifeArrayTrend.push(nextProps.trendData[nextProps.trendData.length-1].y);


                        if(lifeArray[0] == "green"){
                                    lifeEnable = false;
                                    

                                    var absDiff = Math.abs(parseFloat(nextProps.tickCombo[len].open) - parseFloat(nextProps.trendData[nextProps.trendData.length-1].y));
                                    var absDiffRatio = (absDiff/parseFloat(nextProps.trendData[nextProps.trendData.length-1].y))*100;
                                    
                                   // 
                                    
                                    if( absDiffRatio > permissibleBetterTradeLimit ){
                                        //console.log('life array 1  is ' + JSON.stringify(lifeArray));
                                       // console.log('look for better enrty in these trades');
                                        lifeBetterEntry = true;
                                        tradeStartedStopLoss = nextProps.trendData[nextProps.trendData.length-1].y;
                                        tradeStartedStopLoss = parseFloat(parseFloat(tradeStartedStopLoss).toFixed(2));
                                       
                                    }
                                    else if(lifeBetterEntry != true) {

                                        var stopLossPivotDiff = Math.abs(parseFloat(nextProps.tickCombo[len].close) - nextProps.trendData[nextProps.trendData.length-1].y);
                                        var stopLossPivotDiffRatio = (stopLossPivotDiff/parseFloat(nextProps.trendData[nextProps.trendData.length-1].y))*100;

                                       // debugger;
                                        console.log('down buy initiated at 1 ' + currentScripName[0] + ' on day ' +  nextProps.tickCombo[len].date + 'difference ratio is. ' + stopLossPivotDiffRatio);
                                        

                                        // new condo

                                        if(stopLossPivotDiffRatio < 9){
                                               //console.log('down buy initiated at 1 ' + currentScripName[0] + ' on day ' +  nextProps.tickCombo[len].date);
                                        
                                              // console.log('down buy initiated at 7 ' + currentScripName[0] + ' on day ' +  nextProps.tickCombo[len].date);
                                              
                                               lifeTradeType=7;
                                               lifeStopLossArray.push(nextProps.trendData[nextProps.trendData.length-1].y);

                                              triggeredBuyCallArray.push({stock : currentScripName[0],date : nextProps.tickCombo[len].date , type : 7});

                                      //  this.props.saveTriggeredBuyArray({stock : currentScripName[0],date : nextProps.tickCombo[len].date , type : 7});

                                               var someDate = new Date(nextProps.tickCombo[len].date);
                                               if(someDate.getDay() == 5){
                                                   var numberOfDaysToAdd = 3;
                                               }
                                               else if(someDate.getDay() == 6){
                                                   var numberOfDaysToAdd = 2;
                                               }
                                               else{
                                                   //var numberOfDaysToAdd = 1;
                                                   var numberOfDaysToAdd = 2;
                                               }
                                             
                                               for(var i=1 ;i< 7;i++){
                                                  var someDate = new Date(nextProps.tickCombo[len].date);
                                                  someDate.setDate(someDate.getDate() + i);
                                                  tradeDateStartedDate.push(someDate.toISOString().split('T')[0]); 
                                               }

                                               tradeStartedStopLoss = nextProps.trendData[nextProps.trendData.length-1].y;
                                               tradeDiff = true;
                                               lifeEnable= false;
                                               lifeSaved= true;

                                        }
                                        else{
                                            lifeBetterEntry = true;
                                            tradeStartedStopLoss = nextProps.trendData[nextProps.trendData.length-1].y;
                                            tradeStartedStopLoss = parseFloat(parseFloat(tradeStartedStopLoss).toFixed(2));
                                            lifeBetterEntryCriticalLevel = parseFloat(nextProps.tickCombo[len].open);
                                        }



                                    /*lifeStopLossArray.push(nextProps.trendData[nextProps.trendData.length-1].y);
                                    lifeTradeType=1;
                                    lifeStopLossArray.push(nextProps.trendData[nextProps.trendData.length-1].y);

                                    var someDate = new Date(nextProps.tickCombo[len].date);

                                       if(someDate.getDay() == 5){
                                           var numberOfDaysToAdd = 3;
                                       }
                                       else if(someDate.getDay() == 6){
                                           var numberOfDaysToAdd = 2;
                                       }
                                       else{
                                           //var numberOfDaysToAdd = 1;
                                           var numberOfDaysToAdd = 2;
                                       }
                                     
                                       for(var i=1 ;i< 7;i++){
                                          var someDate = new Date(nextProps.tickCombo[len].date);
                                          someDate.setDate(someDate.getDate() + i);
                                          tradeDateStartedDate.push(someDate.toISOString().split('T')[0]); 
                                       }

                                       tradeStartedStopLoss = nextProps.trendData[nextProps.trendData.length-1].y;
                                       tradeDiff = true;
                                       lifeEnable= false;
                                       lifeSaved= true;*/

                                }
                        }
                        else{
                            lifeEnable = true;
                        }


                        if(lifeArray.length ==2){
                            if(lifeArray[0]=="red" && lifeArray[1] == "green"){
                                   lifeEnable = false;


                                 


                                    var absDiff = Math.abs(parseFloat(nextProps.tickCombo[len].open) - parseFloat(nextProps.trendData[nextProps.trendData.length-1].y));
                                    var absDiffRatio = (absDiff/parseFloat(nextProps.trendData[nextProps.trendData.length-1].y))*100;

                                    
                                    if( absDiffRatio > permissibleBetterTradeLimit ){
                                        //console.log('life array 2 is ' + JSON.stringify(lifeArray));
                                        //console.log('look for better enrty in these trades');
                                        lifeBetterEntry = true;
                                        tradeStartedStopLoss = nextProps.trendData[nextProps.trendData.length-1].y;
                                        tradeStartedStopLoss = parseFloat(parseFloat(tradeStartedStopLoss).toFixed(2));
                                        lifeBetterEntryCriticalLevel = parseFloat(nextProps.tickCombo[len].open);
                                       
                                    }
                                    else{

                                        //old ways here

                                      //  ;

                                      console.log('down buy initiated at 2 ' + currentScripName[0] + ' on day ' +  nextProps.tickCombo[len].date);
                                   

                                       lifeTradeType=2;
                                       lifeStopLossArray.push(nextProps.trendData[nextProps.trendData.length-1].y);
                                       var someDate = new Date(nextProps.tickCombo[len].date);

                                triggeredBuyCallArray.push({stock : currentScripName[0],date : nextProps.tickCombo[len].date, type : 2});

                                    //this.props.saveTriggeredBuyArray({stock : currentScripName[0],date : nextProps.tickCombo[len].date, type : 2});

                                       if(someDate.getDay() == 5){
                                           var numberOfDaysToAdd = 3;
                                       }
                                       else if(someDate.getDay() == 6){
                                           var numberOfDaysToAdd = 2;
                                       }
                                       else{
                                           //var numberOfDaysToAdd = 1;
                                           var numberOfDaysToAdd = 2;
                                       }
                                     
                                       for(var i=1 ;i< 7;i++){
                                          var someDate = new Date(nextProps.tickCombo[len].date);
                                          someDate.setDate(someDate.getDate() + i);
                                          tradeDateStartedDate.push(someDate.toISOString().split('T')[0]); 
                                       }

                                       tradeStartedStopLoss = nextProps.trendData[nextProps.trendData.length-1].y;
                                       tradeDiff = true;
                                       lifeEnable= false;
                                       lifeSaved= true;

                                 }

                                   

                         }
                         else{
                             lifeEnable = true;
                         }

                        }


                        if(lifeCount <5 && lifeEnable == true && lifeBetterEntry == false){

                            if(nextProps.trendData[nextProps.trendData.length-1].y !== lifeDetectionStopLoss){
                               // console.log('bpb fails happened on date ' + nextProps.tickCombo[len].date);
                                //console.log('now look for new opportunity');
                                lifeDetectionBPB= true;
                                lifeBetterEntryCriticalLevel = nextProps.trendData[nextProps.trendData.length-1].y;

                            }
                        }

                        if(lifeCount > 3 && lifeBetterEntry == true &&  nextProps.trendData.length > 4){
                           // console.log('searching for better entry .............');

                            var absDiff = Math.abs(parseFloat(nextProps.tickCombo[len].close) - parseFloat(nextProps.trendData[nextProps.trendData.length-1].y));
                            var absDiffRatio = (absDiff/parseFloat(nextProps.trendData[nextProps.trendData.length-1].y))*100;

                            var stopLossPivotDiff = Math.abs(parseFloat(nextProps.tickCombo[len].close) - tradeStartedStopLoss);
                            var stopLossPivotDiffRatio = (stopLossPivotDiff/parseFloat(tradeStartedStopLoss))*100;
                            
                            


                           // console.log('props sidewaysFormationDate' + this.props.trendData[this.props.trendData.length-1].sidewaysFormationDate);
                           // console.log('nextprops sidewaysFormationDate' + nextProps.trendData[nextProps.trendData.length-1].sidewaysFormationDate);
                            //console.log();
                            
                            if(this.props.trendData[this.props.trendData.length-1].sidewaysFormationDate !==  nextProps.trendData[nextProps.trendData.length-1].sidewaysFormationDate){
                                    //time to stop looking for better entry

                                   // console.log('not looking for better entries now... buying condition nullified.........');
                                       //99
                                     lifeDetectionStart=false;
                                     lifeBetterEntryCriticalLevel= 0;
                                     lifeArray=[];
                                     lifeBetterEntry=false;
                                     lifeTradeType=0;
                                     lifeCount=0;
                                     lifeArrayTrend=[];
                                     lifeDetectionStopLoss=0;
                                     lifeDetectionBPB=false;
                                     lifeSaved= false;
                                     lifeEnable= false;
                                     lifeCount = 0;
                                     //99

                            }


                           
                           /* if(parseFloat(nextProps.trendData[nextProps.trendData.length-1].y) > lifeBetterEntryCriticalLevel){
                                 console.log('not looking for better entries now... buying condition nullified.........');
                                   //99
                                 lifeDetectionStart=false;
                                 lifeBetterEntryCriticalLevel= 0;
                                 lifeArray=[];
                                 lifeBetterEntry=false;
                                 lifeTradeType=0;
                                 lifeCount=0;
                                 lifeArrayTrend=[];
                                 lifeDetectionStopLoss=0;
                                 lifeDetectionBPB=false;
                                 lifeSaved= false;
                                 lifeEnable= false;
                                 lifeCount = 0;
                                 //99
                                 
                            }*/
                            

                            var lifeCriticalGoAhead = false;

                            if(lifeBetterEntryCriticalLevel > parseFloat(nextProps.trendData[nextProps.trendData.length-1].y)){
                                lifeCriticalGoAhead= true;
                            }

                            if(absDiffRatio < betterEntryPercentage && lifeCriticalGoAhead == true && stopLossPivotDiffRatio < maxLossPermitted){
                                   
                                  // console.log('better entry obtained yeah at  ' + nextProps.tickCombo[len].date);
                                  // console.log('down buy initiated at 5 ' + currentScripName[0] + ' on day ' +  nextProps.tickCombo[len].date);
                                   
                                   lifeBetterEntry = false;

                                   lifeTradeType= 5;
                                   lifeStopLossArray.push(nextProps.trendData[nextProps.trendData.length-1].y);

                                  triggeredBuyCallArray.push({stock : currentScripName[0],date : nextProps.tickCombo[len].date , type : 5});
                                  //this.props.saveTriggeredBuyArray({stock : currentScripName[0],date : nextProps.tickCombo[len].date , type : 5});


                                   var someDate = new Date(nextProps.tickCombo[len].date);
                                   if(someDate.getDay() == 5){
                                       var numberOfDaysToAdd = 3;
                                   }
                                   else if(someDate.getDay() == 6){
                                       var numberOfDaysToAdd = 2;
                                   }
                                   else{
                                       //var numberOfDaysToAdd = 1;
                                       var numberOfDaysToAdd = 2;
                                   }
                                 
                                   for(var i=1 ;i< 7;i++){
                                      var someDate = new Date(nextProps.tickCombo[len].date);
                                      someDate.setDate(someDate.getDate() + i);
                                      tradeDateStartedDate.push(someDate.toISOString().split('T')[0]); 
                                   }

                                   tradeDiff = true;
                                   lifeEnable= false;
                                   lifeSaved= true;
                            }
                      

                        }


                        if(lifeCount > 5 && lifeEnable == true && lifeDetectionBPB == true && lifeBetterEntry == false){

                            var bpbfailCritical = true;

                            if(lifeBetterEntryCriticalLevel !== undefined){
                                var absDiff = Math.abs(parseFloat(nextProps.tickCombo[len].open) - parseFloat(lifeBetterEntryCriticalLevel));
                                var absDiffRatio = (absDiff/parseFloat(lifeBetterEntryCriticalLevel))*100;

                                if(lifeBetterEntryCriticalLevel <= parseFloat(nextProps.tickCombo[len].open)){
                                        bpbfailCritical = false;
                                } 
                                else{

                                    if(absDiffRatio <  5 ){
                                        bpbfailCritical = false;
                                    }
                                }

                            }


                            if(nextProps.trendData[nextProps.trendData.length-1].dir == "low"){

                                    if(nextProps.trendData[nextProps.trendData.length-1].y > lifeDetectionStopLoss && bpbfailCritical == true ){

                                            console.log('buying opportunity at ' + nextProps.tickCombo[len].date);
                                            lifeSaved = true;
                                            lifeDetectionBPB= false;
                                            lifeDetectionStart=false;
                                            lifeBetterEntryCriticalLevel= 0;
                                            lifeCount=0;

                                            console.log('down buy initiated at 3 ' + currentScripName[0] + ' on day ' + nextProps.tickCombo[len].date);
                                   
                                            lifeTradeType=3;
                                            lifeStopLossArray.push(nextProps.trendData[nextProps.trendData.length-1].y);

                                            triggeredBuyCallArray.push({stock : currentScripName[0],date : nextProps.tickCombo[len].date , type : 3});


                                           // this.props.saveTriggeredBuyArray({stock : currentScripName[0],date : nextProps.tickCombo[len].date , type : 3});
                                            var someDate = new Date(nextProps.tickCombo[len].date);

                                           if(someDate.getDay() == 5){
                                               var numberOfDaysToAdd = 3;
                                           }
                                           else if(someDate.getDay() == 6){
                                               var numberOfDaysToAdd = 2;
                                           }
                                           else{
                                               //var numberOfDaysToAdd = 1;
                                               var numberOfDaysToAdd = 2;
                                           }
                                         
                                           for(var i=1 ;i< 7;i++){
                                              var someDate = new Date(nextProps.tickCombo[len].date);
                                              someDate.setDate(someDate.getDate() + i);
                                              tradeDateStartedDate.push(someDate.toISOString().split('T')[0]); 
                                           }
                                           //tradeStartedStopLoss = nextProps.trendData[nextProps.trendData.length-1].y;
                                           tradeDiff = true;
                                           lifeEnable= false;
                                           lifeSaved= true;
                                     }
                                    else{

                                           // console.log('down buy is failed... look for new opportunity');
                                            var lovelyDiff  = Math.abs(parseFloat(nextProps.tickCombo[len].close) - parseFloat(nextProps.trendData[nextProps.trendData.length-1].y));
                                            var lovelyDiffRatio = (lovelyDiff/parseFloat(nextProps.trendData[nextProps.trendData.length-1].y))*100;
                                            
                                            

                                            if(lovelyDiffRatio < maxLossPermitted && bpbfailCritical == true ){
                                                        console.log('down buy initiated at 4 ' + currentScripName[0] + ' on day ' + nextProps.tickCombo[len].date);
                                                 

                                                        lifeTradeType=6;
                                                        lifeStopLossArray.push(nextProps.trendData[nextProps.trendData.length-1].y);
                                                        var someDate = new Date(nextProps.tickCombo[len].date);
                                                         triggeredBuyCallArray.push({stock : currentScripName[0],date : nextProps.tickCombo[len].date , type : 6});

                                                        // this.props.saveTriggeredBuyArray({stock : currentScripName[0],date : nextProps.tickCombo[len].date , type : 6});



                                                        if(someDate.getDay() == 5){
                                                               var numberOfDaysToAdd = 3;
                                                        }
                                                        else if(someDate.getDay() == 6){
                                                           var numberOfDaysToAdd = 2;
                                                        }
                                                        else{
                                                           //var numberOfDaysToAdd = 1;
                                                           var numberOfDaysToAdd = 2;
                                                        }
                                                     
                                                        for(var i=1 ;i< 7;i++){
                                                          var someDate = new Date(nextProps.tickCombo[len].date);
                                                          someDate.setDate(someDate.getDate() + i);
                                                          tradeDateStartedDate.push(someDate.toISOString().split('T')[0]); 
                                                        }
                                                        tradeStartedStopLoss = nextProps.trendData[nextProps.trendData.length-1].y;
                                                        tradeDiff = true;
                                                        lifeEnable= false;
                                                        lifeSaved= true;

                                            }

                                         
                                    }
                                }
                        }



                    }

                }//big trenddata validation ends here
                    
                   

                   if(lifeCount ==5){
                        // console.log(JSON.stringify(lifeArray));
                        // console.log(JSON.stringify(lifeArrayTrend));
                    }



                  
                //new if started
                        if (nextProps.tickCombo[len].pivot != undefined) {

                            //crude oil
                            if (this.state.pivotpoint != nextProps.tickCombo[len].pivot) {

                                //

                                count = count + 1;

                                var d = crudeTradePrice;

                                this.setState({
                                    pivotpoint: nextProps.tickCombo[len].pivot
                                });

                                var trailDiff = Math.abs(nextProps.tickCombo[len].pivot- crudeTarget);
                              
                                var pivotValue = nextProps.tickCombo[len].pivot;

                                let datainput = {
                                    x: count,
                                    y: nextProps.tickCombo[len].pivot,
                                    dir: nextProps.tickCombo[len].dir,
                                    date: nextProps.tickCombo[len].date,
                                    currentPrice: nextProps.tickCombo[len].currentPrice,
                                    tradeStatus : nextProps.tickCombo[len].tradeStatus,
                                    crudeTradePrice : crudeTradePrice,
                                    crudeTradeManagement : crudeTradeManagement,
                                    crudeLMManagement : crudeLMManagement,
                                    netProfit : crudeNetProfit,
                                    date:nextProps.tickCombo[len].date,
                                    prevY:nextProps.tickCombo[len-3].y,
                                    name : currentScripName[0],
                                    pivotDate : nextProps.tickCombo[len].pivotDate,
                                };

                                this.props.pivotData(datainput);
                                
                            }
                        }

                //new if ended
            }
        }



                






        if ((this.props.trendData) != undefined && this.props.trendData.length > 1 && (nextProps.trendData) != undefined && nextProps.trendData.length >1) {

            


            var trenlen = this.props.trendData.length - 1;
            if (crudeTrendLen === trenlen) {
                var detect = false;
            } else {
                var detect = true;
                crudeTrendLen = trenlen;
            }


            if( nextProps.trendData[nextProps.trendData.length-1].TradeStarted !== undefined){

                        if( nextProps.trendData[nextProps.trendData.length-1].TradeStarted == "downbuy" && nextProps.trendData[nextProps.trendData.length-1].crudeLMManagement == false){
                          
                            if(lifeStopLossArray.indexOf(nextProps.trendData[nextProps.trendData.length-1].y) == -1){
                                 //console.log('haguuuu. ' + JSON.stringify(nextProps.trendData));

                               // this.props.saveTotalBuyArray({stock : currentScripName[0],date : nextProps.trendData[nextProps.trendData.length-1].date});

                                 totalBuyCallArray.push({stock : currentScripName[0],date : nextProps.trendData[nextProps.trendData.length-1].date});
                                 lifeDetectionStart = true;
                                 lifeDetectionStopLoss = nextProps.trendData[nextProps.trendData.length-1].y;
                            }

                          

                           
                         }

            }


            

                    /// trailing stop managemnet here
                    var tradeDirection = nextProps.trendData[trenlen].dir;
                    var pivotValue = nextProps.trendData[trenlen].y;
                    var swingLength = Math.abs(nextProps.trendData[trenlen].y-nextProps.trendData[trenlen-1].y);
                    //var lengthu = nextProps.tickCombo.length - 1;
                   // var yValue = nextProps.tickCombo[lengthu].pivot;

                    var nextPropslen =  nextProps.trendData.length - 1;
                    var nextPropsTradeDirection = nextProps.trendData[nextPropslen].dir;
                    var nextPropsPivotValue = nextProps.trendData[nextPropslen].y;
                    var nextPropSwingLength = Math.abs(nextProps.trendData[nextPropslen].y-nextProps.trendData[nextPropslen-1].y);
                    var nextPropsCurrentPrice = nextProps.trendData[nextPropslen].currentPrice;


                    currentSwingHigh = nextProps.trendData[nextPropslen].y;
                    currentSwingTradeDirection = nextProps.trendData[nextPropslen].dir;

                 
                   


/// trailing stop ends managemnet here

       
        }

        
      

       




       
    }

    startTrade(data, exchange, type, price, stop, target) {


        //  parseFloat(v.price.toFixed(4))

        var squareoff = Math.abs(price - target);
        var stoploss = Math.abs(stop - price);

        squareoff = parseFloat(squareoff.toFixed(2));
        stoploss = parseFloat(stoploss.toFixed(2));


       // 
        //code to set and get the data
        var api_key = "3iciz5hhzaiitjkj",
            secret = "4c0wc0rqnze0hx2c3x9y72tg8wpqbgap",
            request_token = this.state.token;
        let access_token = '';

        var options = {
            "api_key": api_key,
            "debug": false,
            "access_token": access_token_const,
        };

        let kc = new KiteConnect(options);

        /*kc.placeOrder("regular", {
          "exchange": exchange,
          "tradingsymbol": data,
          "transaction_type": type,
          "quantity": 1000,
          "product": "MIS",
          "order_type": "MARKET"
        }).then(function(resp) { 
         console.log('success order placed');
           console.log(resp);
         }).catch(function(err) {
           console.log('error is palcing order');
           console.log(err);
        }); */


        kc.placeOrder(kc.VARIETY_BO, {
            "exchange": exchange,
            "tradingsymbol": data,
            "transaction_type": type,
            "order_type": "LIMIT",
            "quantity": 10000,
            "price": price,
            "squareoff": squareoff,
            "stoploss": stoploss,
            "validity": "DAY"
        }, ).then(function(resp) {
           // console.log('success order placed');
           // console.log(resp);
        }).catch(function(err) {
           // console.log('error in order placed');
           // console.log(JSON.stringify(err));
        });



    }

    stopTrade(data, exchange, type, price) {

        //code to set and get the data
        var api_key = "3iciz5hhzaiitjkj",
            secret = "4c0wc0rqnze0hx2c3x9y72tg8wpqbgap",
            request_token = this.state.token;
        let access_token = '';

        var options = {
            "api_key": api_key,
            "debug": false,
            "access_token": access_token_const,
        };

        let kc = new KiteConnect(options);

        kc.placeOrder("regular", {
            "exchange": exchange,
            "tradingsymbol": data,
            "transaction_type": type,
            "quantity": 1000,
            "product": "MIS",
            "order_type": "LIMIT",
            "price": price
        }).then(function(resp) {
          //  console.log('success order placed');
            //console.log(resp);
        }).catch(function(err) {
          //  console.log('error is palcing order');
           // console.log(err);
        });
    }


    targetTrade(data, exchange, type, price) {

        //code to set and get the data
        var api_key = "3iciz5hhzaiitjkj",
            secret = "4c0wc0rqnze0hx2c3x9y72tg8wpqbgap",
            request_token = this.state.token;
        let access_token = '';

        var options = {
            "api_key": api_key,
            "debug": false,
            "access_token": access_token_const,
        };

        let kc = new KiteConnect(options);

        kc.placeOrder("regular", {
            "exchange": exchange,
            "tradingsymbol": data,
            "transaction_type": type,
            "quantity": 1000,
            "product": "MIS",
            "order_type": "LIMIT",
            "price": price,
        }).then(function(resp) {
          //  console.log('success order placed');
          //  console.log(resp);
        }).catch(function(err) {
           // console.log('error is palcing order');
          //  console.log(err);
        });
    }


    newWebsocketMETHOD() {


        webSocketClicked = true;


        var self = this;
        //
        // console.log(this.state.tickdata);
        var root = "wss://ws.kite.trade/";
        //var self = this.state;
        var read_timeout = 5, // seconds
            reconnect_max_delay = 0,
            reconnect_max_tries = 0,

            // message flags (outgoing)
            mSubscribe = "subscribe",
            mUnSubscribe = "unsubscribe",
            mSetMode = "mode",

            // incoming
            mAlert = 10,
            mMessage = 11,
            mLogout = 12,
            mReload = 13,
            mClearCache = 14,

            // public constants
            modeFull = "full", // Full quote including market depth. 164 bytes.
            modeQuote = "quote", // Quote excluding market depth. 52 bytes.
            modeLTP = "ltp";

        // public constants
        /**
         * @memberOf KiteTicker
         * @desc Set mode full
         */
        this.modeFull = modeFull;

        /**
         * @memberOf KiteTicker
         * @desc Set mode quote
         */
        this.modeQuote = modeQuote;

        /**
         * @memberOf KiteTicker
         * @desc Set mode LTP
         */
        this.modeLTP = modeLTP;

        var ws = null,
            triggers = {
                "connect": [],
                "ticks": [],
                "disconnect": [],
                "error": [],
                "close": [],
                "reconnect": [],
                "noreconnect": [],
                "message": [],
                "order_update": []
            },
            read_timer = null,
            last_read = 0,
            reconnect_timer = null,
            auto_reconnect = false,
            current_reconnection_count = 0,
            last_reconnect_interval = 0;
        var current_ws_url = null,
            token_modes = {},
            defaultReconnectMaxDelay = 60,
            defaultReconnectMaxRetries = 50,
            maximumReconnectMaxRetries = 300,
            minimumReconnectMaxDelay = 5;

        // segment constants
        var NseCM = 1,
            NseFO = 2,
            NseCD = 3,
            BseCM = 4,
            BseFO = 5,
            BseCD = 6,
            McxFO = 7,
            McxSX = 8,
            Indices = 9;

        var tickcount = 0,
            ticklow = 0,
            tickhigh = 0,
            tickopen = 0,
            tickarray = [],
            tickType = 0,
            tickLength = 0,
            tickclose = 0;


        var niftytickcount = 0,
            niftyticklow = 0,
            niftytickhigh = 0,
            niftytickopen = 0,
            niftytickarray = [],
            niftytickType = 0,
            niftytickLength = 0,
            niftytickclose = 0;


        var crudetickcount = 0,
            crudeticklow = 0,
            crudetickhigh = 0,
            crudetickopen = 0,
            crudetickarray = [],
            crudetickType = 0,
            crudetickLength = 0,
            crudetickclose = 0;

        var coppertickcount = 0,
            copperticklow = 0,
            coppertickhigh = 0,
            coppertickopen = 0,
            coppertickarray = [],
            coppertickType = 0,
            coppertickLength = 0,
            coppertickclose = 0;

        var nickletickcount = 0,
            nickleticklow = 0,
            nickletickhigh = 0,
            nickletickopen = 0,
            nickletickarray = [],
            nickletickType = 0,
            nickletickLength = 0,
            nickletickclose = 0;


        var silvertickcount = 0,
            silverticklow = 0,
            silvertickhigh = 0,
            silvertickopen = 0,
            silvertickarray = [],
            silvertickType = 0,
            silvertickLength = 0,
            silvertickclose = 0;

        var first = 0;




        this.connect = function() {

           // console.log(access_token_const);


            // 

            var self = this;

            setInterval(function() {
                getCrudeOHLC(self);
                getNickleOHLC(self);
            }, 3000);



            //  
            let WSS_ROOT_URL = 'wss://ws.kite.trade?api_key=3iciz5hhzaiitjkj&access_token=';
            // let accessdata = this.props.access.access_token.access_token;
            var ws = new WebSocket(`${WSS_ROOT_URL}${access_token_const}`);
            //console.log(accessdata);

            ws.onclose = function() {

            }

            ws.onopen = function(event) {
                var message = {
                    "a": "subscribe",
                    "v": [53835015, 53986823]
                };
                ws.send(JSON.stringify(message));
            };

            ws.binaryType = "arraybuffer";

            ws.onmessage = function(e) {
                // Binary tick data.
                if (e.data instanceof ArrayBuffer) {
                    if (e.data.byteLength > 2) {

                        var d = parseBinary(e.data);
                        // 

                        for (var i = 0; i < d.length; i++) {

                            //
                            if (d[i].instrument_token == "53835015") {

                                get5minDataCrudeTimestamp(d[i].last_price, self);
                            }
                            if (d[i].instrument_token == "12111106") {
                                //nifty function
                                //get5minDataNifty(d[i].last_price, self);

                            }
                            if (d[i].instrument_token == "53986823") {
                                //nifty function
                                get5minDataNickleTimestamp(d[i].last_price, self);

                            }


                        }

                        // get5minData(d[0].last_price, self);
                        // if(d) trigger("ticks", [d]);
                    }
                } else {
                    parseTextMessage(e.data)
                }

                // Set last read time to check for connection timeout
                last_read = new Date();
            };


        }

        //
        this.connect();

        function get5minDataCrudeTimestamp(d, scope) {

            crudearr.push(d);

           // console.log('crudearr is' + crudearr);

        }

        function get5minDataNickleTimestamp(d, scope) {

            nicklearr.push(d);

         //   console.log('nicklearr is' + nicklearr);

        }

        function getNickleOHLC(d) {



            nickletickopen = nicklearr[0];
            nickletickhigh = _.maxBy(nicklearr);
            nickleticklow = _.minBy(nicklearr);
            nickletickclose = nicklearr[nicklearr.length - 1];

            if (nickletickopen < nickletickclose) {
                nickletickType = "green";
            } else if (nickletickopen > nickletickclose) {
                nickletickType = "red";
            } else if (nickletickopen = nickletickclose) {
                nickletickType = "doji";
            }

            nickletickLength = Math.abs(nickletickhigh - nickleticklow);

            nickletickarray = {
                "open": nickletickopen,
                "low": nickleticklow,
                "high": nickletickhigh,
                "close": nickletickclose,
                "tickType": nickletickType,
                'tickLength': nickletickLength
            };
            //
            d.props.addTickDataNickle(nickletickarray);


            first = 0;
            nicklearr = [];


        };



        function getCrudeOHLC(d) {


            // d.startTrade('CRUDEOIL18SEPFUT', 'MCX','SELL' );

            crudetickopen = crudearr[0];
            crudetickhigh = _.maxBy(crudearr);
            crudeticklow = _.minBy(crudearr);
            crudetickclose = crudearr[crudearr.length - 1];

            if (crudetickopen < crudetickclose) {
                crudetickType = "green";
            } else if (crudetickopen > crudetickclose) {
                crudetickType = "red";
            } else if (crudetickopen = crudetickclose) {
                crudetickType = "doji";
            }

            crudetickLength = Math.abs(crudetickhigh - crudeticklow);

            crudetickarray = {
                "open": crudetickopen,
                "low": crudeticklow,
                "high": crudetickhigh,
                "close": crudetickclose,
                "tickType": crudetickType,
                'tickLength': crudetickLength
            };
            //
            d.props.addTickData(crudetickarray);


            first = 0;
            crudearr = [];


        };




        function get5minDataNickle(d, scope) {

           // console.log('data' + d);

            if (nickletickcount == 0) {
                nickletickopen = d;
                nickletickhigh = d;
                nickleticklow = d;
                nickletickcount = nickletickcount + 1;
                //console.log('next should be 1');
                //console.log(tickcount);   94
            } else if (nickletickcount == 94) {
                //console.log('called');
                nickletickclose = d;
                //console.log('ohlc formed');

                if (nickletickopen < nickletickclose) {
                    nickletickType = "green";
                } else if (nickletickopen > nickletickclose) {
                    nickletickType = "red";
                } else if (nickletickopen = nickletickclose) {
                    nickletickType = "doji";
                }

                nickletickLength = Math.abs(nickletickhigh - nickleticklow);

                nickletickarray = {
                    "open": nickletickopen,
                    "low": nickleticklow,
                    "high": nickletickhigh,
                    "close": nickletickclose,
                    "tickType": nickletickType,
                    'tickLength': nickletickLength
                };

                scope.props.addTickDataNickle(nickletickarray);
                nickletickcount = 0;
            } else {
                if (nickletickhigh < d) {
                    nickletickhigh = d;
                }
                if (nickleticklow > d) {
                    nickleticklow = d;
                }

                nickletickcount = nickletickcount + 1;

            }


        }

        function get5minDataNifty(d, scope) {




            if (niftytickcount == 0) {
                niftytickopen = d;
                niftytickhigh = d;
                niftyticklow = d;
                niftytickcount = niftytickcount + 1;
                //console.log('next should be 1');
                //console.log(tickcount);
            } else if (niftytickcount == 2) {
                niftytickclose = d;
                //console.log('ohlc formed');

                if (niftytickopen < niftytickclose) {
                    niftytickType = "green";
                } else if (tickopen > tickclose) {
                    niftytickType = "red";
                } else if (tickopen = tickclose) {
                    niftytickType = "doji";
                }

                niftytickLength = Math.abs(niftytickhigh - niftyticklow);

                niftytickarray = {
                    "open": niftytickopen,
                    "low": niftyticklow,
                    "high": niftytickhigh,
                    "close": niftytickclose,
                    "tickType": niftytickType,
                    'tickLength': niftytickLength
                };

                scope.props.addTickDataNifty(niftytickarray);
                niftytickcount = 0;
            } else {
                if (niftytickhigh < d) {
                    niftytickhigh = d;
                }
                if (niftyticklow > d) {
                    niftyticklow = d;
                }

                niftytickcount = niftytickcount + 1;

            }


        }




        function get5minData(d, scope) {

            if (tickcount == 0) {
                tickopen = d;
                tickhigh = d;
                ticklow = d;
                tickcount = tickcount + 1;
                //console.log('next should be 1');
                //console.log(tickcount);
            } else if (tickcount == 94) {
                tickclose = d;
                //console.log('ohlc formed');

                if (tickopen < tickclose) {
                    tickType = "green";
                } else if (tickopen > tickclose) {
                    tickType = "red";
                } else if (tickopen = tickclose) {
                    tickType = "doji";
                }

                tickLength = Math.abs(tickhigh - ticklow);

                tickarray = {
                    "open": tickopen,
                    "low": ticklow,
                    "high": tickhigh,
                    "close": tickclose,
                    "tickType": tickType,
                    'tickLength': tickLength
                };

                scope.props.addTickData(tickarray);
                tickcount = 0;
            } else {
                if (tickhigh < d) {
                    tickhigh = d;
                }
                if (ticklow > d) {
                    ticklow = d;
                }

                tickcount = tickcount + 1;

            }

        }


        // trigger event callbacks
        function trigger(e, args) {
            if (!triggers[e]) return
            for (var n = 0; n < triggers[e].length; n++) {
                triggers[e][n].apply(triggers[e][n], args ? args : []);
            }
        }

        function parseTextMessage(data) {
            try {
                data = JSON.parse(data)
            } catch (e) {
                return
            }

            if (data.type === "order") {
                trigger("order_update", [data.data]);
            }
        }

        // parse received binary message. each message is a combination of multiple tick packets
        // [2-bytes num packets][size1][tick1][size2][tick2] ...
        function parseBinary(binpacks) {

            var packets = splitPackets(binpacks),
                ticks = [];

            for (var n = 0; n < packets.length; n++) {
                var bin = packets[n],
                    instrument_token = buf2long(bin.slice(0, 4)),
                    segment = instrument_token & 0xff;

                var tradable = true;
                if (segment === Indices) tradable = false;

                var divisor = 100.0;
                if (segment === NseCD) divisor = 10000000.0;

                // Parse LTP
                if (bin.byteLength === 8) {
                    ticks.push({
                        tradable: tradable,
                        mode: modeLTP,
                        instrument_token: instrument_token,
                        last_price: buf2long(bin.slice(4, 8)) / divisor
                    });
                    // Parse indices quote and full mode
                } else if (bin.byteLength === 28 || bin.byteLength === 32) {
                    var mode = modeQuote;
                    if (bin.byteLength === 32) mode = modeFull;

                    var tick = {
                        tradable: tradable,
                        mode: mode,
                        instrument_token: instrument_token,
                        last_price: buf2long(bin.slice(4, 8)) / divisor,
                        ohlc: {
                            high: buf2long(bin.slice(8, 12)) / divisor,
                            low: buf2long(bin.slice(12, 16)) / divisor,
                            open: buf2long(bin.slice(16, 20)) / divisor,
                            close: buf2long(bin.slice(20, 24)) / divisor,
                        },
                        change: buf2long(bin.slice(24, 28))
                    };

                    // Compute the change price using close price and last price
                    if (tick.ohlc.close != 0) {
                        tick.change = (tick.last_price - tick.ohlc.close) * 100 / tick.ohlc.close;
                    }

                    // Full mode with timestamp in seconds
                    if (bin.byteLength === 32) {
                        tick.timestamp = null;
                        var timestamp = buf2long(bin.slice(28, 32));
                        if (timestamp) tick.timestamp = new Date(timestamp);
                    }

                    ticks.push(tick);
                } else if (bin.byteLength === 44 || bin.byteLength === 184) {
                    var mode = modeQuote;
                    if (bin.byteLength === 184) mode = modeFull;

                    var ticktype = '';

                    if ((buf2long(bin.slice(28, 32)) / divisor) > (buf2long(bin.slice(40, 44)) / divisor)) {
                        ticktype = "green";
                    } else if ((buf2long(bin.slice(40, 44)) / divisor) > (buf2long(bin.slice(28, 32)) / divisor)) {
                        ticktype = "red";
                    } else if ((buf2long(bin.slice(28, 32)) / divisor) == (buf2long(bin.slice(40, 44)) / divisor)) {
                        ticktype = "doji";
                    }


                    // console.log(ticktype);


                    var tick = {
                        tradable: tradable,
                        mode: mode,
                        instrument_token: instrument_token,
                        last_price: buf2long(bin.slice(4, 8)) / divisor,
                        last_quantity: buf2long(bin.slice(8, 12)),
                        average_price: buf2long(bin.slice(12, 16)) / divisor,
                        volume: buf2long(bin.slice(16, 20)),
                        buy_quantity: buf2long(bin.slice(20, 24)),
                        sell_quantity: buf2long(bin.slice(24, 28)),
                        ohlc: {
                            open: buf2long(bin.slice(28, 32)) / divisor,
                            high: buf2long(bin.slice(32, 36)) / divisor,
                            low: buf2long(bin.slice(36, 40)) / divisor,
                            close: buf2long(bin.slice(40, 44)) / divisor,
                            ticktype: ticktype,
                        }
                    };

                    // Compute the change price using close price and last price
                    if (tick.ohlc.close != 0) {
                        tick.change = (tick.last_price - tick.ohlc.close) * 100 / tick.ohlc.close;
                    }

                    // Parse full mode
                    if (bin.byteLength === 184) {
                        // Parse last trade time
                        tick.last_trade_time = null;
                        var last_trade_time = buf2long(bin.slice(44, 48));
                        if (last_trade_time) tick.last_trade_time = new Date(last_trade_time * 1000);

                        // Parse timestamp
                        tick.timestamp = null;
                        var timestamp = buf2long(bin.slice(60, 64));
                        if (timestamp) tick.timestamp = new Date(timestamp * 1000);

                        // Parse OI
                        tick.oi = buf2long(bin.slice(48, 52));
                        tick.oi_day_high = buf2long(bin.slice(52, 56));
                        tick.oi_day_low = buf2long(bin.slice(56, 60));
                        tick.depth = {
                            buy: [],
                            sell: []
                        };

                        var s = 0,
                            depth = bin.slice(64, 184);
                        for (var i = 0; i < 10; i++) {
                            s = i * 12;
                            tick.depth[i < 5 ? "buy" : "sell"].push({
                                quantity: buf2long(depth.slice(s, s + 4)),
                                price: buf2long(depth.slice(s + 4, s + 8)) / divisor,
                                orders: buf2long(depth.slice(s + 8, s + 10))
                            });
                        }
                    }

                    ticks.push(tick);
                }
            }

            return ticks;
        }

        // split one long binary message into individual tick packets
        function splitPackets(bin) {
            // number of packets
            var num = buf2long(bin.slice(0, 2)),
                j = 2,
                packets = [];

            for (var i = 0; i < num; i++) {
                // first two bytes is the packet length
                var size = buf2long(bin.slice(j, j + 2)),
                    packet = bin.slice(j + 2, j + 2 + size);

                packets.push(packet);

                j += 2 + size;
            }

            return packets;
        }


        // Big endian byte array to long.
        function buf2long(buf) {
            var b = new Uint8Array(buf),
                val = 0,
                len = b.length;

            for (var i = 0, j = len - 1; i < len; i++, j--) {
                val += b[j] << (i * 8);
            }

            return val;
        }




    }




    startCountingTick() {
      //  console.log('called');
    }

    startWebsocketClient() {

        //  console.log('called');
        //console.log(this.props.access);KiteTicker("your_api_key", "your_access_token")
        let SIGNIN_ROOT_URL = 'token ypmxayteat7agml9:';
        let accessdata = this.props.access;

        var headers = {
            'X-Kite-Version': '3',
            'Authorization': `${SIGNIN_ROOT_URL}${accessdata}`,
        };



        var data = {
            'api_key': '3iciz5hhzaiitjkj',
            'access_token': this.props.access,
        };



        var ticker = new KiteTicker(data, headers);

        ticker.connect();
        ticker.on("tick", this.onTick(ticker));
        ticker.on("connect", this.onConnect(ticker));
    }

    startfetchingYearlydata(){
        this.processData();
    }


    startfetchingdata(){

              //console.log('ranuuuuuuu');
             
              var self = this;
             let  WSS_ROOT_URL = 'ws://localhost:4000/echo';
             // let accessdata = this.props.access.access_token.access_token;
              var ws = new WebSocket(`${WSS_ROOT_URL}`);
              //console.log(accessdata);

                ws.onclose = function(){

                }

               ws.onopen = function (event) {
               // console.log('on open');

                  // self.startfetchingdata();
                   var message = {"a": "subscribe", "v": [779521]};

                   ws.send(JSON.stringify(message));
              };

              ws.onmessage = function(e) {

                  //console.log('message received');
                  
                  //console.log(JSON.parse(e.data));
                  dataSet = JSON.parse(e.data);

                 
              }

            
            }


    render() {

        return ( <
            div >


            <
            p > Congratulation we got the session key as {
                this.state.token
            } < /p>

            <
            p > Congrats first job done.Now we have to call websocket client < /p>

            <
            p > Call websocket client with sesion key < /p>

            <
            button onClick = {
                () => this.startGeneratingServerSession()
            } > Call Websocket client < /button>


            {
                (this.props.access != '' && this.props.access != undefined) ?
                < button onClick = {
                    () => this.newWebsocketMETHOD()
                } > Start websocket client < /button>: ''
            }

            <
            div class = "container" >



            /*<
            div class = "row" >
            1 {
                (this.props.tickCombo != undefined && this.props.tickCombo.length >= 1) ?
                < div class = "col-md-3" > < KitePlot title = "Crude"
                plotdata = {
                    this.props.tickCombo
                }
                /> </div >
                :
                ''
            }

            {
                (this.props.trendData != undefined && this.props.trendData.length >= 1) ?
                < div class = "col-md-8" > < LineApp title = "Crude1"
                plotdata = {
                    this.props.trendData
                }
                /></div >
                :
                ''
            } <
            /div>*/

           




            </div>

              <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
              
              <button onClick = {() => this.startfetchingYearlydata()} >Get Updated index</button>


            </div>)
        }
    }


    function mapStateToProps(state) {
        return {
            access: state.access,
            tickCombo: state.tickData,
            trendData: state.plData,
            tickComboNifty: state.tickDataNifty,
            trendDataNifty: state.plDataNifty,
            trendDataNickle: state.plDataNickle,
            tickCombonickle: state.tickDataNickle,
            tickDataJD: state.tickDataJD,
            alphaData: state.alphaData,
        }
    };

    export default withRouter(connect(mapStateToProps, {
        pivotJDData,
        addJDTickData,
        getAcessToken,
        addTickData,
        pivotData,
        addTickDataNifty,
        pivotDataNifty,
        addTickDataNickle,
        pivotDataNickle,
        removePlotdatatest,
        removeTickData,
        getAlphaData,
        removeAlphadata,
        saveMainArray,
        saveTotalBuyArray,
        saveTriggeredBuyArray,
    })(YearlyBPB));