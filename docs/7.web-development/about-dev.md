## Introducere: despre fisiere
Inca dinaintea internetului rolul unui calculator, pe langa altele, a fost de a reprezenta in mod digital o situatie din viata reala. 

Indiferent daca vorbim de o poza facuta in vacanta sau de o lista de angajati, aceste `date` trebuie transferate cumva intr-un format potrivit pentru a putea fi intelese si prelucrate de un calculator. Pntru asta avem fisiere si diferite extensii (`.jpg` pentru o imagine, `.xlsx` pentru fisiere Microsoft Excel, `.psd` pentru fisiere Adobe Photoshop, etc).

Toate aceste fisiere contin date formatate intr-un mod specific, de unde si multitudinea de programe cu care pot fi citite sau editate. Un fisier `.xlsx` nu poate fi deschis cu Adobe Photoshop, iar un fisier `.psd` nu poate fi deschis cu Microsoft Word sau Notepad.

Indiferent daca din motive personale sau profesionale ai interactionat cu un calculator ai facut-o probabil in jurul unor fisiere:
* Poate ca ai copiat de pe telefon pe calculator niste poze din vacanta, apoi le-ai deschis cu Photoshop pentru a le taia sau adauga niste filtre.
* Sau poate ai lucrat cu diferite programe in scop profesional: Microsoft Word, Excel, AutoCAD, etc. Din nou, ai creat sau editat niste fisiere.

In toate aceste actiuni ai folosit interfata acelui program pentru editare: Ai aplicat un efect apasand pe niste butoane in Photoshop, ai adaugat un tabel in Word, ai completat niste date in Excel.
In final, ai modificat (indirect, prin apasare de butoane sau taste) fisierul initial pentru rezultatele scontate.


## Programarea ca editare de fisiere
Orice actiunie de programare, web sau nu, implica crearea si editarea unui fisier. Cea mai importanta diferenta fata de editarile descrise mai sus este ca vei modifica direct fisierul. Efectiv, vei deschide fisierul cu un editor de text (Notepad, spre exemplu) si vei adauga comenzi care sa poata in citite si interpretate de calculator (de un browser de pe acel calculator, mai exact).

## Browsers 
Un browser (Chrome, Firefox, etc) nu este altceva decat un program specializat in citi si interpreta fisiere `.html` - la fel cum MS Word stie sa deschida fisiere `.docx`.


## Editare vs Vizualizare
Sa luam examplul unui fisier `.jpg`: il poti deschide atat cu Photoshop sau MS Paint cat si cu Windows Photo Viewer. Daca il deschizi cu Photoshop sau MS Paint vei putea si edita fisierul, pe cand cu Windows Photo Viewer il poti doar vizualiza.

Asemanator si in cazul fisierelor cu care vei lucra: daca deschizi fisierul cu Notepad vei vedea efectiv continutul lui si il vei putea edita, pe cand cu un browser doar il vei vizualiza - cu toate efectele de culoare, marime, pozitie.


## Limbaje de comunicare in viata reala
Oamenii comunica prin diferite limbaje: limba pe care o vorbesc, limbajul semnelor, cod morse, etc.
Toate aceste limbaje implica:
* un emitator
* un receptor
* un canal de transmitere
* un set de reguli

Daca i te adresezi unui prieten, tu esti emitatorul, el este receptorul, canalul este aerul dintre voi, iar comunicarea va respecta niste reguli.

Sa luam un exemplu banal: "Adu-mi din bucatarie un pahar de apa, te rog".

Se observa cel putin 2 reguli de comunicare: folosesti litere din alfabetul latin si le ordonezi intr-o forma specifica. "Audmi- caaribeut un dni apa ed harpa" nu ar avea niciun sens.


## Limbaje de programare
Limbajele de programare respecta acelasi tipar:
* programatorul este emitatorul
* calculatorul este receptorul
* fisierele sunt canalul de transmitere
* exista un set de reguli: felul in care scrii HTML, CSS sau JavaScript.

This is it! Asta vei face in intreaga ta cariera de programator: ii vei transmite unui calculator un set de reguli printr-un fisier.


## Unde apar problemele?
De-a lungul cursului voi incerca sa rezolv cateva obstacole:

### Relatia cu calculatorul
Cred ca trebuie sa privim calculatorul ca pe un prieten. Un prieten extrem de rapid si gata sa rezolve aprope orice problema atat timp cat ii comunicam corect. Vezi tu, prietenul asta are zero social skills sau intuitie si are nevoie de indicatii clare.

### Gandirea problemei vs scrierea de cod (cod syntax)
Cred ca cel mai des gresim in programare cand ne concentram pe a scrie sau invata cod - ironic, probabil. 

Retine ca un calculator este rapid dar foarte "prost". Trebuie sa gandim problema pentru el si sa o descriem pas cu pas.

Ajuta ca inainte de a scrie comenzi calculatorului sa iti imaginezi cum ai rezolva tu problema. defapt, sxista un nume pentru asta: [pseudocode](https://en.wikipedia.org/wiki/Pseudocode) si se preda in liceu/facultate. Imi displacea atunci dar acum imi dau seama ca e vital: nu-i poti cere calculatorului ceva daca tu nu ti poti imagina rezolvarea problemei.

Ba mai mult, asta va fi de-a lungul cursului o regula de baza: **dezvolta-ti gandirea si capacitatea de a-ti imagina problema si rezolvarea ei decat sa scrii cod**. 

Sa scrii cod e usor dupa ce ai in cap rezolvarea problemei. Ba mai mult, se va intampla sa schimbi libajul sau mediul (JavaScript, TypeScript, NodeJS ) dar gandirea va ramane de cele mai multe ori aceeasi.


### Comunicarea este diversa
Asa cum sa ceri un pahar cu apa se poate face in multe feluri: "Da-mi niste apa" vs "Adu-mi niste apa, te rog", vei descoperi ca sunt multe moduri in a-i cere unui calculator sa faca ceva.
Maturitatea unui programator se poate masura dupa calitatea si cantitatea lucrurilor pe care i-le poate cere unui calculator.


### DEX-ul programatarilor
Imagineaza-ti un DEX al programatorilor: pe langa cuvinte, contine si fraze, proverbe.

Vei incepe cariera cu un DEX de marimea unei brosuri si il vei tot extinde.
Cu primele cuvinte care ti stau la dispozitie vei putea cere putin sau/si te vei exprima "rudimentar".

Pe masura ce inveti cuvinte noi, vei putea cere mai mult si intr-un mod mai "elegant". 


### Scrie cod pentru oameni, nu pentru calculator
De ce "elegant"?

Pentru ca pentru a scrie cod care sa poata fi citit de calculator, e usor. Dificultatea vine cand codul tau va fi citit de oameni - colegi sau chiar tu. 
Calculatorului nu-i pasa de spatii libere, nume de variabile sau alte detalii. Oamenilor, da. Oamenii au dificultati in a citi cod "urat". Oamenii pierd multa vreme citind un cod "urat". Oamenii te vor injura pentru un cod "urat".


### Despre a scrie (putin) cod
Ironic, rolul tau de programator este sa scrii cat mai putin cod - atat timp cat programul functioneaza corect.

De ce? Mai putin cod implica mai putine greseli, este mai rapid de citit, este mai usor de intretinut.
