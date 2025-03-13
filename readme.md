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
<details>
<summary>Problem sortowania tablicy przez porównywanie i zamianę sąsiednich elementów.</summary>

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

### Implementacja Quick Sort

<details>
<summary>Problem sortowania tablicy przy użyciu strategii "dziel i zwyciężaj".</summary>

#### Opis Problemu
Posortuj tablicę liczb w porządku rosnącym używając algorytmu Quick Sort, który dzieli tablicę na mniejsze części wokół elementu "pivot", rekurencyjnie sortuje te części i w rezultacie uzyskuje posortowaną tablicę.

#### Przykład z Życia
Jak organizowanie książek w bibliotece - wybieramy jedną książkę jako punkt odniesienia (pivot), układamy wszystkie książki alfabetycznie przed nią po lewej stronie, wszystkie po niej po prawej, a następnie powtarzamy ten proces dla każdej z powstałych grup książek.

#### Moje Rozwiązanie
```typescript
function qs(arr: number[], lo: number, hi: number): void {
	if (lo >= hi) {
		return;
	}
	const pivotIndex = partition(arr, lo, hi);

	qs(arr, lo, pivotIndex - 1);
	qs(arr, pivotIndex + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
	const pivot = arr[hi];

	let idx = lo - 1;

	for (let i = lo; i < hi; ++i) {
		if (arr[i] <= pivot) {
			idx++;
			const tmp = arr[i];
			arr[i] = arr[idx];
			arr[idx] = tmp;
		}
	}
	idx++;
	arr[hi] = arr[idx];
	arr[idx] = pivot;

	return idx;
}

export default function quickSort(arr: number[]): void {
	qs(arr, 0, arr.length - 1);
}
```

#### Wyjaśnienie
1. Algorytm działa poprzez:
   - Wybór elementu pivot (w tym przypadku ostatni element segmentu)
   - Partycjonowanie tablicy tak, aby elementy mniejsze od pivota były po lewej, a większe po prawej
   - Rekurencyjne zastosowanie tego samego procesu do powstałych podtablic
   - Kluczowe jest, że pivot po partycjonowaniu znajduje się na swojej finalnej pozycji

2. Funkcja `partition`:
   - Znajduje właściwą pozycję dla pivota
   - Przesuwa elementy mniejsze/równe pivotowi na lewą stronę
   - Zwraca indeks, gdzie pivot został ostatecznie umieszczony

3. Rekurencja kończy się, gdy segment ma 0 lub 1 element

#### Cechy
- Złożoność czasowa: Średnio O(n log n), w najgorszym przypadku O(n²)
- Złożoność pamięciowa: O(log n) na stos rekurencyjny
- Stabilny: Nie (ta implementacja)
- In-place: Tak, nie wymaga dodatkowej pamięci na dane
- Szczególnie wydajny dla dużych zbiorów danych
- Wrażliwy na wybór pivota (zła strategia wyboru może prowadzić do O(n²))

#### Optymalizacje
- Losowy wybór pivota
- Mediana trzech (wybór pivota jako mediany pierwszego, środkowego i ostatniego elementu)
- Przełączanie na InsertionSort dla małych partycji (np. < 10 elementów)

</details>



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
</details>

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

##### Array List vs Linked List 

Kiedy chcemy odczytywać pierwszy,ostatni, losowy element, wykorzystamy raczej `Array List`, gdyż zapewnia nam to odczyt O(1). Natomiast jeżeli chcemy wstawiać lub usuwać wartość skorzystamy z `Linked List `, gdyż wtedy nie będziemy musieli przestawiać elementów n-razy i będzie to znacznie wydajniejsze niż zwykła tablica. 


</details>

### Rekurencja
<details>
<summary>Jest to funkcja która wywołuje samą siebie dopóki dany problem nie zostanie rozwiązany(base case)</summary>
# Rekurencja - Komponenty i Etapy

##### 1. Przypadek bazowy (Base Case)
- Warunek końcowy, który przerywa rekurencyjne wywołania
- Rozwiązuje problem bezpośrednio, bez dalszych wywołań rekurencyjnych
- Zapobiega nieskończonej rekurencji
- Przykłady:
  - Dotarcie do końca labiryntu
  - Osiągnięcie krawędzi tablicy
  - Osiągnięcie określonej głębokości rekurencji

##### 2. Przypadek rekurencyjny (Recursive Case)
- Wywołanie tej samej funkcji z innymi parametrami
- Przekształca oryginalny problem na mniejszy podproblem
- Zbliża rozwiązanie do przypadku bazowego
- Przykłady:
  - Przejście do sąsiedniego pola w labiryncie
  - Sprawdzenie kolejnego elementu w tablicy
  - Przetwarzanie mniejszego fragmentu danych

#### Etapy wykonania rekurencji

##### 1. Pre-rekurencja (Pre-recursion)
- Kod wykonywany przed wywołaniem rekurencyjnym
- Przygotowuje dane i warunki dla wywołania rekurencyjnego
- Przykłady:
  - Oznaczenie pola jako odwiedzone
  - Dodanie elementu do ścieżki
  - Inicjalizacja zmiennych pomocniczych

##### 2. Wywołanie rekurencyjne (Recursive call)
- Właściwe wywołanie funkcji z nowymi parametrami
- Przekazuje zmodyfikowany problem do kolejnego wywołania

##### 3. Post-rekurencja (Post-recursion)
- Kod wykonywany po powrocie z wywołania rekurencyjnego
- Przetwarza wyniki z wywołania rekurencyjnego
- Przykłady:
  - Cofnięcie zmian (backtracking) jeśli rekurencja nie powiodła się
  - Łączenie wyników z wielu wywołań rekurencyjnych
  - Czyszczenie lub resetowanie stanu

#### Przykład: Przeszukiwanie labiryntu
```typescript
function walk(maze, curr, end, seen, path) {
  // Base Case: warunki końcowe
  if (curr === end) return true;
  if (outOfBounds(curr) || isWall(curr) || seen[curr]) return false;
  
  // Pre-rekurencja
  seen[curr] = true;
  path.push(curr);
  
  // Wywołania rekurencyjne
  for (const dir of directions) {
    const next = move(curr, dir);
    if (walk(maze, next, end, seen, path)) return true;
  }
  
  // Post-rekurencja (backtracking)
  path.pop();
  return false;
}
```
</details>

### Binary Tree (Drzewo Binarne)
<details>
<summary>Hierarchiczna struktura danych, w której każdy węzeł może mieć maksymalnie dwóch potomków</summary>

#### Opis
Drzewo binarne to nieliniowa struktura danych, gdzie każdy węzeł może mieć co najwyżej dwóch potomków, zazwyczaj nazywanych lewym i prawym dzieckiem. Węzeł bez potomków nazywany jest liściem.

#### Typy Drzew Binarnych
1. **Pełne Drzewo Binarne (Full Binary Tree)**
   - Każdy węzeł ma 0 lub 2 potomków (nie ma węzłów z tylko jednym dzieckiem)
   
2. **Kompletne Drzewo Binarne (Complete Binary Tree)**
   - Wszystkie poziomy, z wyjątkiem ostatniego, są całkowicie wypełnione
   - Wszystkie węzły na ostatnim poziomie są ułożone jak najbardziej na lewo
   
3. **Idealne Drzewo Binarne (Perfect Binary Tree)**
   - Wszystkie węzły wewnętrzne mają dokładnie dwóch potomków
   - Wszystkie liście są na tym samym poziomie
   
4. **Zrównoważone Drzewo Binarne (Balanced Binary Tree)**
   - Różnica wysokości między lewym i prawym poddrzewem każdego węzła jest nie większa niż 1
   
5. **Drzewo Binarne Poszukiwań (Binary Search Tree)**
   - Dla każdego węzła wszystkie elementy w lewym poddrzewie są mniejsze
   - Dla każdego węzła wszystkie elementy w prawym poddrzewie są większe

#### Przykład Implementacji
```typescript
export type BinaryNode<T> = {
    value: T;
    left?: BinaryNode<T> | null;
    right?: BinaryNode<T> | null;
};

// Przykładowa implementacja drzewa
const tree: BinaryNode<number> = {
    value: 20,
    left: {
        value: 10,
        left: {
            value: 5,
            right: {
                value: 7
            }
        },
        right: {
            value: 15
        }
    },
    right: {
        value: 50,
        left: {
            value: 30,
            left: {
                value: 29
            },
            right: {
                value: 45
            }
        },
        right: {
            value: 100
        }
    }
};
```

#### Zastosowania
- Indeksy baz danych (B-drzewa)
- Kodowanie Huffmana
- Systemy plików
- Algorytmy wyszukiwania
- Struktura DOM w przeglądarkach
</details>

### Tree Traversal (Przechodzenie Drzewa)
<details>
<summary>Metody systematycznego odwiedzania wszystkich węzłów drzewa</summary>

#### Opis
Przechodzenie drzewa to proces odwiedzania (przetwarzania) każdego węzła w drzewie dokładnie jeden raz. Istnieją różne algorytmy przechodzenia, które różnią się kolejnością odwiedzania węzłów.

### Przechodzenie w Głąb (Depth-First Traversal)

#### Pre-order (Preorder Traversal)
<details>
<summary>Odwiedzanie węzła przed odwiedzeniem jego dzieci</summary>

##### Algorytm
1. Odwiedź bieżący węzeł (ROOT)
2. Przetwórz lewe poddrzewo (LEFT)
3. Przetwórz prawe poddrzewo (RIGHT)

##### Implementacja
```typescript
function preOrder<T>(node: BinaryNode<T> | null, path: T[] = []): T[] {
    if (!node) {
        return path;
    }
    // ROOT
    path.push(node.value);
    // LEFT
    preOrder(node.left ?? null, path);
    // RIGHT
    preOrder(node.right ?? null, path);
    
    return path;
}
```

##### Wizualizacja
Dla przykładowego drzewa:
```
        20
       /  \
     10    50
    / \    / \
   5  15  30 100
    \    / \
     7  29 45
```

Kolejność odwiedzania: **20, 10, 5, 7, 15, 50, 30, 29, 45, 100**

![Pre-order Traversal](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Traversal_pre-order.gif/220px-Traversal_pre-order.gif)

##### Zastosowania
- Tworzenie kopii drzewa
- Wyrażenia prefiksowe (przedrostkowe)
- Wyświetlanie struktury katalogów
</details>

#### In-order (Inorder Traversal)
<details>
<summary>Odwiedzanie węzła pomiędzy odwiedzeniem lewego i prawego dziecka</summary>

##### Algorytm
1. Przetwórz lewe poddrzewo (LEFT)
2. Odwiedź bieżący węzeł (ROOT)
3. Przetwórz prawe poddrzewo (RIGHT)

##### Implementacja
```typescript
function inOrder<T>(node: BinaryNode<T> | null, path: T[] = []): T[] {
    if (!node) {
        return path;
    }
    // LEFT
    inOrder(node.left ?? null, path);
    // ROOT
    path.push(node.value);
    // RIGHT
    inOrder(node.right ?? null, path);
    
    return path;
}
```

##### Wizualizacja
Dla przykładowego drzewa:
```
        20
       /  \
     10    50
    / \    / \
   5  15  30 100
    \    / \
     7  29 45
```

Kolejność odwiedzania: **5, 7, 10, 15, 20, 29, 30, 45, 50, 100**

![In-order Traversal](https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Traversal_in-order.gif/220px-Traversal_in-order.gif)

##### Zastosowania
- W drzewie BST daje węzły w porządku rosnącym
- Ewaluacja wyrażeń matematycznych
- Sortowanie danych
</details>

#### Post-order (Postorder Traversal)
<details>
<summary>Odwiedzanie węzła po odwiedzeniu jego dzieci</summary>

##### Algorytm
1. Przetwórz lewe poddrzewo (LEFT)
2. Przetwórz prawe poddrzewo (RIGHT)
3. Odwiedź bieżący węzeł (ROOT)

##### Implementacja
```typescript
function postOrder<T>(node: BinaryNode<T> | null, path: T[] = []): T[] {
    if (!node) {
        return path;
    }
    // LEFT
    postOrder(node.left ?? null, path);
    // RIGHT
    postOrder(node.right ?? null, path);
    // ROOT
    path.push(node.value);
    
    return path;
}
```

##### Wizualizacja
Dla przykładowego drzewa:
```
        20
       /  \
     10    50
    / \    / \
   5  15  30 100
    \    / \
     7  29 45
```

Kolejność odwiedzania: **7, 5, 15, 10, 29, 45, 30, 100, 50, 20**

![Post-order Traversal](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Traversal_post-order.gif/220px-Traversal_post-order.gif)

##### Zastosowania
- Usuwanie drzewa (każdy węzeł jest usuwany po jego dzieciach)
- Wyrażenia postfiksowe (przyrostkowe)
- Obliczanie rozmiaru katalogów
</details>

### Porównanie Metod Przechodzenia
| Metoda | Kolejność | Zastosowania |
|--------|-----------|--------------|
| Pre-order | ROOT, LEFT, RIGHT | Kopiowanie drzewa, wyrażenia prefiksowe |
| In-order | LEFT, ROOT, RIGHT | Sortowanie BST, wyrażenia infiksowe |
| Post-order | LEFT, RIGHT, ROOT | Usuwanie drzewa, wyrażenia postfiksowe |

### Wizualizacja Wszystkich Metod
<details>
<summary>Porównanie wizualne wszystkich metod przechodzenia</summary>

![Wszystkie metody](https://cdn.programiz.com/sites/tutorial2program/files/tree-traversal.png)

Kolejność odwiedzania dla różnych metod:
- **Pre-order**: F, B, A, D, C, E, G, I, H
- **In-order**: A, B, C, D, E, F, G, H, I
- **Post-order**: A, C, E, D, B, H, I, G, F

</details>