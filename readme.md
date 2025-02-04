# Algorytmy I Struktury Danych

## 1.Notacja BIG 0
<details>
<summary>Notacja `BIG 0` mówi nam o tym jak bardzo nasz algorytm spowalnia gdy wzrasta liczba elementów</summary>

### Zasady dotyczące BigO
- **Worst Case** - Zawsze podczas określania notacji bigO, bierzemy pod uwagę najgorszy możliwy scenariusz
- **Remove Constants** - Podczas określania notacji ignorujemy stałe zmienne oraz małe kalkulacje.
- **Inne warunki dla inputow** - Inaczej liczymy notację gdy mamy kilka różnych inputów np:

  ```javascript
    
    function compressBoxesTwice(boxes, boxes2){
        boxes.forEach(function(boxes){
            console.log(boxes)
        })

        boxes2.foreach(boxes=>console.log(boxes))

        // O(a+b) a nie O(n)
    }

  ```
- **Odrzucamy nie dominujący warunki** - Bierzemy najgorszy scenariusz z możliwych jeżeli mamy notacje O(x^2+3x+1000+x/2) no to złożoność notacji będzie wynosić **O(x^2)**
</details>

## 2. Hash Tables
<details>
<summary>Pary klucz-wartość w których klucze są unikalne</summary>
Dzięki Hash Tables uzyskajmy bardzo szybki dostęp do danych. Działanie has table polega na tym że input otrzymuje hashowany adres który prowadzi do jego miejsca zapisu w komórce pamięci, dlatego odczyt jest bardzo szybki.
</details>