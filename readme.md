## Algorytmy 
### 1.Notacja BIG 0
<details>
<summary>Notacja `BIG 0` mówi nam o tym jak bardzo nasz algorytm spowalnia gdy wzrasta liczba elementów</summary>

#### Zasady dotyczące BigO
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

### 2. Algorytmy Wyszukiwania
<details>
<summary>Implementacje różnych algorytmów wyszukiwania wraz z ich złożonością obliczeniową i przykładami wykorzystania</summary>

### Binary Search (Wyszukiwanie Binarne)
Problem wyszukiwania elementu w posortowanej tablicy.

#### Opis Problemu
Mając posortowaną tablicę liczb oraz wartość szukaną, znajdź czy element występuje w tablicy.

#### Przykład z Życia
Szukanie słowa w słowniku - nie sprawdzamy każdej strony po kolei, tylko otwieramy w środku i eliminujemy połowę możliwości.

#### Moje Rozwiązanie
```typescript
function binarySearch(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    do {
        const mid = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[mid];
        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    } while (lo < hi);
    return false;
}
```

#### Wyjaśnienie
1. Algorytm działa na zasadzie "dziel i zwyciężaj":
   - Sprawdza środkowy element
   - Jeśli to szukana wartość - kończy
   - Jeśli szukana jest mniejsza - szuka w lewej połowie
   - Jeśli szukana jest większa - szuka w prawej połowie
2. Złożoność O(log n) - w każdym kroku eliminujemy połowę możliwości

### Linear Search (Wyszukiwanie Liniowe)
Problem wyszukiwania elementu w nieuporządkowanej tablicy.

#### Opis Problemu
Znajdź czy element występuje w tablicy poprzez sprawdzenie każdego elementu.

#### Przykład z Życia
Szukanie konkretnej książki na półce, gdy książki nie są ułożone alfabetycznie - musimy sprawdzić każdą.

#### Moje Rozwiązanie
```typescript
function linearSearch(haystack: number[], needle: number): boolean {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) return true;
    }
    return false;
}
```

#### Wyjaśnienie
1. Najprostszy algorytm wyszukiwania:
   - Sprawdza każdy element po kolei
   - Zwraca true jeśli znajdzie element
   - Zwraca false jeśli przejrzy całą tablicę
2. Złożoność O(n) - musimy sprawdzić każdy element

### Two Crystal Balls (Problem Dwóch Kryształowych Kul)
Problem znalezienia punktu krytycznego przy ograniczonych zasobach.

#### Opis Problemu
Mamy budynek o n piętrach i dwie identyczne kryształowe kule. Chcemy znaleźć najniższe piętro, z którego upuszczona kula się rozbije.

#### Przykład z Życia
Testowanie wytrzymałości produktu przy ograniczonej liczbie próbek testowych.

#### Moje Rozwiązanie
```typescript
function twoCrystalBalls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jmpAmount;

    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpAmount;
    for (let j = 0; j < jmpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
```

#### Wyjaśnienie
1. Algorytm działa w dwóch fazach:
   - Pierwszą kulą skaczemy co sqrt(n) pięter
   - Gdy pierwsza kula się rozbije, używamy drugiej do liniowego przeszukania ostatniego odcinka
2. Złożoność O(√n) - optymalne rozwiązanie dla tego problemu

### Porównanie Algorytmów
| Algorytm | Złożoność | Wymagania | Zalety | Wady |
|----------|-----------|-----------|--------|------|
| Binary Search | O(log n) | Posortowana tablica | Bardzo wydajny | Wymaga posortowanych danych |
| Linear Search | O(n) | Brak | Prosty w implementacji | Nieefektywny dla dużych danych |
| Two Crystal Balls | O(√n) | Monotoniczność danych | Optymalny dla specyficznego problemu | Ograniczone zastosowanie |

</details>

### 3. Algorytmy Sortowania
<details>
<summary>Implementacje różnych algorytmów sortowania wraz z ich złożonością obliczeniową</summary>

### Bubble Sort (Sortowanie Bąbelkowe)
Problem sortowania tablicy przez porównywanie i zamianę sąsiednich elementów.

#### Opis Problemu
Posortuj tablicę liczb w porządku rosnącym poprzez wielokrotne przejścia przez tablicę i zamienianie sąsiednich elementów, jeśli są w złej kolejności.

#### Przykład z Życia
Sortowanie kart w ręku - porównujemy dwie sąsiednie karty i zamieniamy je miejscami, jeśli są w złej kolejności.

#### Moje Rozwiązanie
```typescript
export function bubbleSort(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
```

#### Wyjaśnienie
1. Algorytm działa poprzez:
   - Wielokrotne przejścia przez tablicę
   - Porównywanie sąsiednich elementów
   - Zamianę elementów miejscami, jeśli są w złej kolejności
   - Z każdym przejściem największy element "wypływa" na koniec
2. Złożoność O(n²) - dla każdego elementu musimy przejść przez (prawie) całą tablicę

#### Cechy
- Złożoność czasowa: O(n²)
- Złożoność pamięciowa: O(1)
- Stabilny: Tak
- In-place: Tak

</details>

## Struktury Danych

### 1. Hash Tables
<details>
<summary>Pary klucz-wartość w których klucze są unikalne</summary>
Dzięki Hash Tables uzyskajmy bardzo szybki dostęp do danych. Działanie has table polega na tym że input otrzymuje hashowany adres który prowadzi do jego miejsca zapisu w komórce pamięci, dlatego odczyt jest bardzo szybki.
</details>

### 2. Queue (Kolejka)
<details>
<summary>Struktura danych typu FIFO (First In First Out) - pierwszy element, który wszedł, pierwszy wychodzi</summary>

#### Opis
Kolejka to liniowa struktura danych, która działa na zasadzie "pierwszy wszedł, pierwszy wyszedł" (FIFO). Wyobraź sobie kolejkę w sklepie - pierwsza osoba, która stanęła w kolejce, pierwsza zostanie obsłużona.

#### Przykład z Życia
Kolejka do kasy w sklepie - klienci są obsługiwani w kolejności przyjścia.

#### Moje Rozwiązanie
```typescript
type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) return undefined;
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        head.next = undefined;
        if (this.length === 0) this.tail = undefined;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
```

#### Operacje i Złożoność
- enqueue (dodanie) - O(1)
- deque (usunięcie) - O(1)
- peek (podgląd) - O(1)
- length (długość) - O(1)
</details>

### 3. Stack (Stos)
<details>
<summary>Struktura danych typu LIFO (Last In First Out) - ostatni element, który wszedł, pierwszy wychodzi</summary>

#### Opis
Stos to liniowa struktura danych działająca na zasadzie "ostatni wszedł, pierwszy wyszedł" (LIFO). Wyobraź sobie stos książek - możesz dodawać i zdejmować książki tylko z góry stosu.

#### Przykład z Życia
Stos talerzy - zawsze bierzemy talerz z góry stosu.

#### Moje Rozwiązanie
```typescript
type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }
        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }
        const head = this.head as Node<T>;
        this.head = head.prev;
        head.prev = undefined;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
```

#### Operacje i Złożoność
- push (dodanie) - O(1)
- pop (usunięcie) - O(1)
- peek (podgląd) - O(1)
- length (długość) - O(1)

### 4. Linked List (Lista Powiązana)
<details>
<summary>Dynamiczna struktura danych, gdzie każdy element (węzeł) zawiera dane i odnośnik do następnego elementu</summary>

#### Opis
Lista powiązana to struktura danych, w której elementy są połączone ze sobą za pomocą wskaźników. Każdy element zawiera wartość oraz wskaźnik do następnego elementu.

#### Typy List Powiązanych
1. **Jednokierunkowa** (Singly Linked List)
   - Każdy węzeł ma tylko jeden wskaźnik do następnego elementu
   - Przykład: implementacja Queue powyżej

2. **Dwukierunkowa** (Doubly Linked List)
   - Każdy węzeł ma wskaźniki do poprzedniego i następnego elementu
   - Przykład: implementacja Stack powyżej używa wskaźnika do poprzedniego elementu

#### Operacje i Złożoność
- Dostęp do elementu - O(n)
- Wstawienie na początku - O(1)
- Wstawienie na końcu - O(1) z wskaźnikiem tail, O(n) bez
- Usunięcie z początku - O(1)
- Usunięcie z końca - O(1) dla listy dwukierunkowej, O(n) dla jednokierunkowej

#### Zalety i Wady
Zalety:
- Dynamiczny rozmiar
- Łatwe wstawianie i usuwanie elementów
- Efektywne wykorzystanie pamięci

Wady:
- Brak dostępu bezpośredniego do elementów (jak w tablicy)
- Dodatkowa pamięć na wskaźniki
- Trudniejsze w implementacji niż tablice

</details>

### 3. Array List vs Linked List 
<details>
<summary>Wykorzystanie jednej z tych struktur zależy głównie od  funkcjonalności którą wykonujemy</summary>

Kiedy chcemy odczytywać pierwszy,ostatni, losowy element, wykorzystamy raczej `Array List`, gdyż zapewnia nam to odczyt O(1). Natomiast jeżeli chcemy wstawiać lub usuwać wartość skorzystamy z `Linked List `, gdyż wtedy nie będziemy musieli przestawiać elementów n-razy i będzie to znacznie wydajniejsze niż zwykła tablica. 


</details>