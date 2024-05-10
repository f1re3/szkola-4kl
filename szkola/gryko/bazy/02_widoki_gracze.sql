-- W internetowej grze Bitwa o Kamienną Bramę bierze udział wielu graczy z całego świata. Każdy gracz może budować różnego rodzaju jednostki (np. robotników, piechurów, łuczników, szpiegów lub magów), które może wykorzystać do budowy wirtualnego księstwa lub wystawić do bitwy. Polem gry jest duża plansza, na której każda jednostka zajmuje pewne miejsce. Każdy gracz może mieć wiele jednostek, np. kilku robotników, drwali, balist i innych. 

-- W plikach gracze.txt, klasy.txt oraz jednostki.txt podano aktualny stan wirtualnej planszy. Dane w tych plikach podane są w kolejnych wierszach, w każdym wierszu pola oddzielono znakiem tabulacji. Pierwszy wiersz każdego z plików jest wierszem nagłówkowym.

--  Plik gracze.txt zawiera informację o graczach: 

--  unikatowy identyfikator będący liczbą całkowitą, numer gracza (id_gracza) 
--  kraj pochodzenia (kraj) 
--  datę dołączenia do gry (data_dolaczenia) w formacie rrrr-mm-dd 
-- id_gracza kraj data_dolaczenia 
-- 1 Japonia 2018-02-15 
-- 2 Indie 2017-06-08 
-- 3 Stany Zjednoczone 2019-06-10 
-- W pliku klasy.txt podano klasy jednostek, jakie gracz może budować. Każda klasa jest opisana przez następujące parametry: 

--  nazwę klasy jednostek (nazwa) 
--  siłę (sila), strzał (strzal) oraz magię (magia) – trzy atrybuty określające zdolności jednostek tej klasy 
-- szybkość (szybkosc) – prędkość poruszania się jednostek tej klasy 
-- nazwa sila strzal magia szybkosc 
-- zwiadowca 8 5 0 25 
-- lucznik 5 10 0 12 
-- mag ognia 5 0 15 10 
-- paladyn 20 0 5 20 
-- W pliku jednostki.txt podano stan planszy, czyli wszystkie jednostki zbudowane przez graczy. Jeden wiersz pliku opisuje jedną jednostkę za pomocą następujących informacji: 

--  unikatowy identyfikator będący liczbą naturalną (id_jednostki)
-- identyfikator gracza, do którego należy jednostka (id_gracza) 
-- nazwę klasy, do której należy jednostka (nazwa) 
-- miejsce jednostki na planszy – jej współrzędne x i y (lok_x, lok_y)
--  id_jednostki id_gracza nazwa lok_x lok_y 
-- 1 153 piechur 166 30 
-- 2 60 topornik 36 44 
-- 3 88 drwal 134 88 
-- 4 182 kusznik 3 196


--------------------------------------------------------------------


-- 1. Zaimportuj dane

-- 2 Przygotuj widok Gracze2018  ilu graczy dołączyło do gry w 2018 z poszczególnych krajów.
CREATE VIEW Gracze2018 as 
SELECT COUNT(*) as ILOSC, kraj
FROM gracze
WHERE data_dolaczenia LIKE "2018%"
GROUP BY kraj;

-- 3. Korzystając z widoku Gracze2018 podaj 5 krajów, z których najwięcej graczy dołączyło do gry w 2018 roku. Dla każdego z tych krajów podaj liczbę graczy, którzy dołączyli w 2018 roku.
SELECT kraj, ILOSC
FROM Gracze2018
ORDER BY ILOSC DESC
LIMIT 5;

-- 4. Utwórz widok klasyJednostki, który zawiera pola: id_jednostki, nazwa, sila, strzal.
CREATE VIEW klasyJednostki as
SELECT id_jednostki, jednostki.nazwa, sila, strzal
FROM jednostki
    INNER JOIN klasy on jednostki.nazwa = klasy.nazwa;

-- 5. Korzystając z widoku klasyJednostki  podaj sumę wartości pola strzał (strzal) dla każdej klasy jednostek, które mają „elf” jako część nazwy.


-- 6. Przygotuj widok Artylerzysci zawierający numery graczy, którzy mają jednostki o nazwie artylerzysta


-- 7. Podaj numery graczy, którzy nie mają artylerzystów (jednostek o nazwie artylerzysta). Numery podaj w porządku rosnącym (numery graczy, których nie ma w wyniku zwracanym przez Artylerzysci) (?)


-- 8. utwórz widok  jednostkiOdBramy, zawierający id jednostki, nazwe, szybkosc oraz odleglosc od Kamiennej bramy ( |x – x1| + |y – y1|  )


-- Jeden krok jednostki to przejście o 1 w dowolnym z czterech kierunków (północ, południe, wschód lub zachód). W jednej turze jednostka może wykonać co najwyżej tyle kroków, ile wynosi jej szybkosc. Innymi słowy jednostka w ciągu jednej tury może przemieścić się z punktu (x,y) do punktu (x1,y1), jeśli |x – x1| + |y – y1| ≤ szybkosc. Tytułowa Kamienna Brama znajduje się w miejscu (100,100). 


-- 9.Korzystając z widoku jednostkiOdBramy wyszukaj jednostki, które mogą w jednej turze dojść do Bramy, i podziel je na poszczególne klasy. Utwórz zestawienie, które dla każdej klasy poda jej nazwę oraz liczbę jednostek z tej klasy mogących w jednej turze osiągnąć Bramę.


-- 10. przygotuj widok bitwy, który będzie dla każdej lokalizacji liczył ilu jest różnych graczy i wyświetłą tylko te wiersze, gdzie ta ilość jest większa od 1

-- Jeśli w pewnej lokalizacji znajdują sięjednostki więcej niż jednego gracza, toczy się tam (jedna) bitwa. Oblicz: a) ile bitew ma miejsce na planszy, b) w ilu bitwach biorą udział gracze z Polski

-- lipiec 2035

-- Polska 11 Stany Zjednoczone 8 Francja 7 Rosja 6 Niemcy 6

-- ciemny elf 555 elfi czarodziej 435 lesny elf 1815 wysoki elf-gwardzista 870

-- 22 24 29 35 36 37 38 47 54 61 64 72 110 114 115 122 123 138 141 167

-- architekt 1 artylerzysta 4 balista 2 ciemny elf 1 drwal 3 elfi czarodziej 1 goniec 2 ifryt 1 kaplan 2 kawalerzysta 7 konny lucznik 4 kusznik 1 lekki jezdziec 19 lucznik 1 mag powietrza 3 mag wody 2 paladyn 1 piechur 7 pikinier 5 robotnik 5 topornik 5 wysoki elf-gwardzista 1 zwiadowca 4

-- 1061, w tym 245 z udziałem Polaków