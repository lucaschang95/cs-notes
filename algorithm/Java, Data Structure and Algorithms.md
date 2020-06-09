# Data Structure and Algorithms, Java Version

Author: Lucas Chang


# Table of Contents
-------------------------------

- [Java](#Java)
  - [Basic Type 基本类型](#Basic-Type-基本类型)
  - [Primitive Type and corresponding Wrap Type 初始类和包装类](#Primitive-Type-and-corresponding-Wrap-Type-初始类和包装类)
  - [Other Types](#Other-Types)
    - [Arrays 数组](#Array-数组)
    - [String 字符串](#String-字符串)
    - [Math](#Math)
  - [Iterators 迭代器](#Iterators-迭代器)
  - [Assertions](#Assertions)
  - [Bit Operation 位运算](#Bit-Operation-位运算)
  - [Access level modifier 访问控制符](#Access-level-modifier-访问控制符)
  - [Original Code Reverse Code Complement Code](#Original-Code-Reverse-Code-Complement-Code)
- [Data Structure and Java Implementation](#Data-Structure-and-Java-Implementation)
  - [Collection 容器](#Collection-容器)
    - [List 列表](#List-列表)
      - [ArrayList\<E> 数组集合](#ArrayList\<E>-数组集合)
      - [LinkedList\<E> 链表集合](#LinkedList\<E>-链表集合)
    - [Vector\<E> 向量](#Vector\<E>-向量)
    - [Set 集合](#Set-集合)
      - [HashSet 哈希集合](#HashSet-哈希集合)
    - [Queue\<E> 队列](#Queue\<E>-队列)
    - [Stack\<E\> 栈](#Stack\<E\>-栈)
    - [Deque\<E\> 双向队列](#Deque\<E\>-双向队列)
  - [Binary Trees 二叉树](#Binary-Trees-二叉树)
  - [Priority Queue 优先队列](#Priority-Queue-优先队列)
  - [Binary Heap 二叉堆](#Binary-Heap-二叉堆)
  - [Balanced Search Trees 二叉搜索树](#Balanced-Search-Trees-二叉搜索树)
    - [2-3 tree](#2-3-tree)
    - [Red-Black BSTs](#Red-Black-BSTs)
    - [B Trees](#B-Trees)
  - [Symbol Table 符号表](#Symbol-Table-符号表)
    - [Key Value Pair 键值对](#Key-Value-Pair-键值对)
    - [Symbol Table implementations: summary](#Symbol-Table-implementations:-summary)
  - [Hash Table 哈希表](#Hash-Table-哈希表)
- [Algorithms](#Algorithms)
  - [Sorting Algorithms 排序算法](#Sorting-Algorithms-排序算法)
    - [Selection Sort 选择排序](#Selection-Sort-选择排序)
    - [Insertion Sort 插入排序](#Insertion-Sort-插入排序)
    - [Shell Sort 希尔排序](#Shell-Sort-希尔排序)
    - [Merge Sort 归并排序](#Merge-Sort-归并排序)
    - [Quick Sort 快速排序](#Quick-Sort-快速排序)
    - [Heap Sort 堆排序](#Heap-Sort-堆排序)
    - [Sorting algorithms: summary](#Sorting-algorithms:-summary)
  - [Knuth Shuffle](#Knuth-Shuffle)
- [Others](#Others)
  - [ASCII码](#ASCII码)
  - [HashMap 和 HashTable](#HashMap-和-HashTable)

-------------------------------

## Java

-------------------------------

### Basic Type 基本类型
- `boolean`: 布尔值
  - default: false
- `byte`: 8位, 有符号, 用二进制补码表示的整数.
  - min: -128(-2^7), max: 127(2^7-1)
  - default: 0
  - byte类型用在大型数组中用于节约空间
- `short`: 16位, 有符号, 用二进制补码表示的整数.
  - min: -32768(-2^15), max: 32767(2^15-1)
  - default: 0
- `int`: 32位, 有符号, 用二进制补码表示的整数.
  - min: --2,147,483,648(-2^31), max: 2,147,483,647(2^31-1) 214亿左右
  - default: 0
  - Integer
    - fields: MAX_VALUE, MIN_VALUE
    - 方法: int `bitCount()` 二进制下有多少1
    - Integer `valueOf(String s)`
- `long`: 32位, 有符号, 用二进制补码表示的整数.
  - default: 0.0
- `double`: 64位, 有符号, 用二进制补码表示的整数.
  - default: 0.0
- `char`: 16位的Unicode字符
  - min: `\u0000`, max: `\uffff`

-------------------------------

### Primitive Type and corresponding Wrap Type 初始类和包装类
- HashMap, HashTable 等类型时key-value对需要使用对应的包装类
- 包装类为引用类, 但是只要值相同,就认为相等(不需要同一个对象)

-------------------------------

### Other Types

-------------------------------

#### Array 数组

属性
- length 数组长度

> **java.util.Arrays**

- 使用时必须带上类名Arrays
- `binarySearch(generic[], generic)`
- `copyOf(generic[], length)`
- `copyOfRange(generic[], from, to)` **[from, to): 包含from, 不包含to**
- `equals(generic[], generic[])`
- `fill(generic[], val, from, to)`
- void `sort(generic[])` 排序,使用Dual-Pivot Quicksort by Vladimir Yaroslavskiy(**哭诉排序**)

-------------------------------
#### String 字符串

> Java String类型


- `concat(String str)` 拼接 concatenates the specified string to the end of this string
- `charAt(index)` returns the charvalue at the specified index
- `toCharArray()` 变为char的数组
- `indexOf()` returns the index with this string of the first occurrence of the specified character
- `char[]` `toCharArray()` 将该字符串变为char array
- `equals(Object anObject)` compare this string to the specified object
- `compareTo(anotherString)` compares two stirng lexicographically
- `substring(beginIndex, endIndex)` 得到substring
- `split(regex)` 根据正则表达式`regex`将string分为substring[]

> Java StringBuilder类型

- `append()` append
- `insert()`
- `delete(index, index)` delete substring defined by two index
- `toString()`

-------------------------------


#### Math
**静态方法** 使用时需要带上Math.xxx!
- `abs()` absolute value
- `ceil()` smallest value that is greater than or equal to the argument
- `floor()` 和 `ceil()` 相反
- `max(value a, value b)`
-  `max(value a, value b)`
- double `random()`
- double `log()` base e logartithm (natural logarithm)
- `pow(x, i)` Returns the value of the first argument raised to the power of the second argument

-------------------------------

### Iterators 迭代器

- `Iterable` 接口, 定义了一个`iterator()`方法, 能够返回一个迭代器`Iterator<Item>`
- `Iterator<Item>` 接口, 拥有方法`hasNext()`(返回boolean)和`next()`(返回Item)
**使用方法**: 外部类(需要迭代的类)需要implements `Iterable` 接口, 类中因此需要有`Iterator()`方法返回一个Iterator类. 这个Iterator可以由内部类并implement `Iterator<Item>`接口来完成

-------------------------------

### Assertions
- Statement to test assumptions about your program
  - Helps detect logic bugs
  - Documents code
- **Usage** `assert isSorted(a, lo, hi)`
- Throws exceptions if boolean condition is false
- Can enable of disable at runtime --> No cost in production code
  - command line: `java -ea MyProgram` `java -da MyProgram`

-------------------------------

### Bit Operation 位运算
- `^` 异或运算, 针对二进制, 相同的为0, 不同的为1.
  - 一个数异或同一个数两次，结果还是它本身。（可用于加密和解密）
- `&`
  - boolean 与运算, "且"
  - 对于数值 按位与
- `|`
  - boolean 或运算, "或"
  - 对于数值 按位或

-------------------------------

### Access level modifier 访问控制符
- At the top level - `public` or _package-private_(no explicit modifier)
- At the member level - `public` `protected` _package-private_(no explicit modifier) or `private`
- `public`: world visible
- `protected`: within package, subclass outside package
- _package-private_(no explicit modifier): within package
- `private`: within class

-------------------------------

### Original Code Reverse Code Complement Code
- 原码, 反码, 补码
  - 原码: 最高位表示符号(0: 正数, 1: 负数)
  - 反码: 负数的反码等于原码取反(抛去符号位取反)
  - 正数的原码反码补码 **相同**
  - 全0表示+0, -0那个(全1)拿来表示最小的负数

-------------------------------

## Data Structure and Java Implementation

-------------------------------

### Collection 容器

> Interface

Collection下三大接口:

- (boolean) `add(E e)`
- (boolean) `addAll(Collection)`
- boolean `contains(object o)`
- boolean `isEmpty()`
- int `size()`

**Collection Implementations**

|Interface|Hash Table|Resizable Array|Balanced Tree|Linked List|Hash Table + Linked List|
|:---:|:---:|:---:|:---:|:---:|:---:|
|Set|HashSet||TreeSet||LinkedHashSet|
|List| |ArrayList||LinkedList||
|Deque||ArrayDeque||LinkedList||
|Map|HashMap||TreeMap||LinkedHashMap|

- **C.R.U.D**
  -  create, retrive, update, delete

-------------------------------

#### List 列表

> **public interface List\<E> extends Collection\<E>**

**Definition**: An ordered collection(also known as a _seqence_.

- List默认添加和删除的元素是位于list尾部的元素(index最大的元素)
- list的索引index是从0开始的(**0-based**)
type: interface 接口
- `add((index), E)` Insert the specified element at the specified position (**default**: end) in this list
- `get(index)`
- `remove((index))`
- `set(index, E)`
- boolean `contains(E)`
- `equals`
- boolean `isEmpty()`
- `Iterator<E>` `iterator((index))`
- `clear`
- `toArray()`
- int `size()` Returns the number of elements in this list

**Bottom line**:
- List is abstract, cannot be instantiated.(不可以使用new新建List对象)
- List中元素可以重复,并且是有序的

-------------------------------

#### ArrayList\<E\> 数组集合

- `clone()` swallow copy?
- `indexOf(Object o)` first occurence of the specified object
-------------------------------

#### LinkedList\<E\> 链表
- 术语: head, tail
Java Implementation
**继承自list集合,此处只写出额外的linkedlist方法**
- LinkedList的方法中,默认是移除该linked list的head元素
- `addFirst(E e)`
- `addLast(E e)`
- E `element` Retrieves, but does not remove, the head (first element) of this list
- `push(E e)` pushes an element onto the stack represented by this list
- `pop()` pops an element from the stack represented by this list

-------------------------------

#### Vector\<E> 向量
> public class Vector<E> implements List<E>, RandomAccess, Cloneable, Serializable
**可以理解为一种 resizing array**
- The Vector class implements a growable array of objects
**增**
- `add()`

**查**
- `get(index)` returns the element at the specified position in this Vector
- `firstElement()` the item at index 0
- `lastElement()`
- `contains(Object o)`
- `isEmpty()`
- `size()`

**删**
- `remove()`

**改**
-------------------------------

#### Set 集合

> public interface Set\<E\> extends Collection\<E\>

- A collection that contains **no duplicate** elements.
- **增**
  - `add()`
- **查**  
  - `contains(Object o)` returns true if this set contains the specified element
  - `isEmpty()`
- **删**
  - `remove()`
  - `clear()`
- **改**
  - set集合似乎不能改
- `size()`
- int `capacity()` returns the current capacity of this Vector

-------------------------------

#### HashSet

- boolean `add(E e)` adds the specified element to this set if it is not already present
- boolean `remove(Object o)` removes the specified element from this set if it is present
- int `size()` returns the numbers of elements in this set(its cardinality)
- boolean `contains(Object o) returns true if this set contains the specified element`
- Iterator<E>

-------------------------------

#### Queue\<E\> 队列

> **public interface Queue<E> extends Collection\<E>**

||_Throw exception_|_Returns special value_|
|:---:|:---:|:---:|
|Insert|`add(e)`|`offer(e)`|
|Remove|`remove()`|`poll()`|
|Examine|`element()`|`peek()`|

**手撕queue的array实现和linked实现**
- java中, Queue由LinkedList实现

-------------------------------
#### Stack\<E\> 栈

术语: **LIFO**, **push**, **pop**

- `push(E item)`
- E `pop()`
- `empty()` tests if this stack is empty
- E `peek()` looks at the object the top of this stack without removing it from the stack
- int `search()` Returns the 1-based positon where an object is on this stack.

##### linked-list implementation
- Every operation takes ocnstant time in the worst case.

##### Java implementation

> public class `Stack<E>` extends `Vector<E>`

- boolean `empty()` tests if this stack is empty
- E `push(E)`
- E `pop()`
- E `peek()` looks at the object at the top of the stack
- int search(Object o) return the 1-based position where an object is on this stack

**手撕stack的array实现和linked实现**

-------------------------------

#### Deque\<E\> 双向队列
- interface, 实现该接口的有linked list
- addFirst, addLast
- removeFirst, removeLast
- getFirst, getLast
- offerFirst, offerLast
- pullFirst, pollLast
- peekFirst, peekFirst

-------------------------------

### Binary Trees 二叉树

**leaf node 叶子节点** 是指没有子节点的node

**pre-order traversal 前序遍历**
- 根 - 左子树 - 右字树

**in-order traversal 中序遍历**
- 左子树 - 根 - 右子树

**post-order traversal 后序遍历**
- 左子树 - 右子树 - 根

**Complete Binary Tree 完全二叉树**
- Perfectly balanced, except for bottom level
- **Height** of complete tree wiht **N** nodes is `[lg N]`
------------------------------

### Priority Queue 优先队列

- Collections Insert and detele items. Which item to delete?
  - **stack.** Remove the item most recently added.
  - **Queue.** Remove the item least recently added.
  - **Randomized queue.** Remove a random item.
  - **Priority queue.** Remove the **largest** (or **smallest**) item

**Priority queues implementation cost summary**

|implementation|insert|del max|max|
|:---:|:---:|:---:|:---:|
|unordered array|1|N|N|
|ordered array|N|1|1|
|binary heap|log N|log N|1|

- Priority queue applications: Event-driven simulation, Numerical computation, Data compression, Graph searching, Number theory, Artificial intelligence, Statistics, Operating systems, Discrete optimizaiton, Spam filtering

------------------------------

### Binary Heap 二叉堆

**Binary Heap representations**
- Array representation of a heap-ordered **complete binary Tree**(除了最后一层都是满的,最后一层从左到右)
- Keys in nodes
- Parent's key no smaller then children's keys(二叉堆区别于其他数据结构的主要性质  )

**Array representation**
- Indices start at 1.
- Take nodes in level order.
- No explicit links needed.

**Binary Heap properties**
- Largetst key is a[1], which is root of binary tree.
- Can use array indices to move through tree.
  - Parent of node at k is at k/2.
  - Children of node at k are at 2k and 2k + 1.

**Promotion in a heap (swim operation)**
- to eliminate the violation
- Exchange key in child with key in parent.
- Repeat until heap order restored

**Insertion in a heap**
- Add node at end, then swim it up.
- costs: at most `1 + lgN` compares

**Demotion in a heap (sink opeartion)**
- Exchange key in parent with key in larger child.
- Repeat unitl heap order restored.

**Delete the maximum in a heap**
- Exchange root with node at end, then sink it down.
- Cost: at most `2 lgN` compares.

**Binary heap considerations**
- Immutability of keys
  - Assumption: client does not change keys while they're on the PQ.
  - Best practive: use immutable keys.
- Underflow and overflow
  - Underflow: **throw exception** if deleting from e  PQ
  - overflow: add **no-arg constructor**  and use **resizing array**.

------------------------------

### Balanced Search Trees 平衡搜索树
A BST is a **binary tree** in **symmetric order**.
(二叉树: node有left, right两个子node)
(应该和二叉堆没关系吧)
二叉树的中序遍历(in-order traversal)会组成一个sorted array(AESC)
symmetric order
-  each node has a key, and every node's key is:
  - Larger than all keys in its left subtree
  - Smaller than all keys in its right subtree

- 缺点: 二叉搜索树容易不平衡 (Tree shape depends on order of insertion)
- **worst case** : search, insert: N
- **average case**: 1.39lgN (h: height of BST)

##### Hilbard deletion
- 分类 当node有0 1 2个children是
- sqrt(N) per operation

------------------------------

#### 2-3 tree (2, 3 是孩子的数量)
- Allow 1 or 2 keys per node
  - 2-node: one key, two children.
  - 3-node: two key, three children. (smaller, between, larger)

**Perfect balance.** Every path from root to null link has same length.
**Symmetric order** Inorder traversal yields keys in ascending order.

- Insert:
  - insert into 1-node, --> 2-node
  - insert into 2-node, temporarily to 3-node, then middle value raise to its parents node (recursively)

summary:guarantee logarithmic performance

------------------------------

#### Red-Black BSTs
Left-leaning red-black BSTs

1. Represent 2-3 tree as a BST.
2. Use "internal" left-leaning links as "glue" for 3-nodes.

red link: glue, 合并为3-node,
black link: connect

left-leaning 左倾是说redLink左倾, 同时也意味着3node中, larger value 为 root.

An equivalent definition
A BST such that:
- No node has two red links connected to it.
- Every path from root to null link has the same number of black links. ("perfect black balance")
- Red links lean left.

实现方法:
link 的 red-black 体现在其子节点的属性中, boolean color: RED = TRUE; BLACK = FALSE;

`Left rotation` Orient a (temporarily) right-leaning red link to lean left.
`Right rotation`
`Color flip` Recolor to split (temporary) 4-node
`Insert`
  - 1-node smaller larger
  - 2-node smaller between larger

Proposition. Height of tree is <= 2lgN in the worst case

------------------------------

#### B Trees
Generalize 2-3 trees by allowing up to M - 1 key-link pairs per node
- At least 2 key-link pairs at root.
- At least M /2 key-link pairs in other nodes.
- External nodes contain client keys.
- Internal nodes contain copies of keys to guide search.

B-trees (and variants) are widely used for file systems and databases.

------------------------------

### Symbol Table 符号表

#### Java implementation

> Interface Map<K, V>

K - the type of keys maintained by this map

V - the type of mapped values

- An object that maps keys to values. A map cannot contain duplicate keys; each key can map to at most one value.
- ` (K `key, `V `value`)` associates the specified value with the specified key in this map
- `V` `get(Object` key`)` returns the value to which the specified key is mapped, or null if this map contains mo mapping for the key.
- boolean `containsKey(Object key)` returns true if this map contains a mapping for the specified key
- boolean `containsValue(Object value)` returns true if this map maps one or more keys to the specified value
- `V` `remove(Object` key`)` Removes the mapping for a key from this map if it is present
- `replace(K` key, `V` value`)` replace
- boolean `isEmpty()`
- `clear()` removes all of the mappings from this map

------------------------------

#### Key Value Pair 键值对

> public class `Pair<K, V>` extends `Object` implements `Serializable`

- `Pair(K key, V value)` 构造函数
- K `getKey()` gets the key for this pair
- V `getValue()` gets the value for this pair
- boolean `equals(Object o)` test this Pair for equality with another Object

------------------------------

#### Symbol Table implementations: summary
![summary](http://a1.qpic.cn/psb?/V13mdl0c1ilKRz/xMNn6JLpHzP9vq*a5T1rvCSnLrv4u3l3rcdR8or0yfA!/m/dAgBAAAAAAAAnull&bo=ogU4BAAAAAADB7k!&rf=photolist&t=5)

------------------------------

### Hash Table 哈希表
Hashing: basic plan
Save items in a key-indexed table (index is a function of the key).
**Hash function** Method for computing array index from key.

Issues
- Computing the hash function.
- Equality test: method for checking whether two keys are wqual.
- Collision resolution: Algorithm and data structure to handle two keys that hash to the same array index.

Idealistic goal Scramble the keys uniformly to produce a table index.
- Efficiently computable.(容易计算)
- Each table index equally likely for each key.(均匀hash)

All Java classes inherit a method `hashCode()`, which return a 32-bit `int`.
Defalt implementation. Memory address of x.
使用honor method

经过MlnM个hash， 每个位置（array index）都会有一个key 

hash如何处理collision
- separate chaining symbol table
  - M: array entry 的个数， N key个数
  - M ~ N / 5
- linear probing (open addressing)
  - When a new key collides, find next empty slot, and put it there.
  - Array size M **Must be** greater than number of key-value pairs N. 
  - M ` 2 * N 

One-way hash functions
MD4, MD5, SHA1, SHA2 (目前只有SHA2是安全的)

![summary][http://a3.qpic.cn/psb?/V13mdl0c1ilKRz/ULCOT*sUf96JTzHQZsQUAyA4JUBOEu0b0U4C.uAOd1c!/m/dLYAAAAAAAAAnull&bo=RwX2AwAAAAADB5U!&rf=photolist&t=5]
------------------------------

## Algorithms

------------------------------

### Sorting Algorithms 排序算法

**Sort.** Rearrange array of N items into ascending order (**默认升序**)
- Java中借助于`Comparable`接口 (排序的元素必须是Comparable的 )(comparable interface: sort using a type's **natural order**)
- 比较时,使用自己的private函数 `less(Comparable e1, Comparable e2)`, 函数内部调用object的`v.compareTo(w)`方法
- interface `Comparator` : sort using an alternate order
  - 实现方法`compare(v, w)`
- To omplement a comparator:
  - Define a (nested) class that implements the `Comparator` interface
  -  Implement the `compare()` method

``` Java
public interface Comparable<Item>
{
  pulic int compareTo(Item that);
}
```

##### Comparable<E> API
- Implement `compareTo()` so that `v.compareTo(w)`
- natural order, total order
  - Returns a negative integer, zero, or positive integer
    - if `v` is less than, equal to, or greater than `w`, respectively
  - Throws an exception if incompatible types (or either is `null`)

##### Comparable<E> API
- 实现了compare(E1, E2)方法
-
- 用途
  - Arrays.sort(array, Comparator)

------------------------------

#### Selection Sort 选择排序

- In iteration `i`, find `min` index entry of the remaining part, then Swap `a[i]` and `a[min]`
- (**worst case**) `1/2 N^2` compares and `0` exchanges
- (**worst case**) `1/2 N^2` compares and `N-1` exchanges
- compare无论输入数组怎样, 都是要比较`1/2 N^2`次的
- 只需对最后一个无需scan,因为到最后一个时候肯定是最大的了
- `Java` 无自带**选择排序**,因为太垃圾了吧(?)

------------------------------

#### Insertion Sort 插入排序

- In iteration `i`, (依次) swap `a[i]` with each larger entry in the already sorted part
- 如果发现当前比较的以及比`a[i]`小,可以认为`a[i]`已经**in place**
- (**average**) `1/4 N^2` compares and `1/4 N^2` exchanges
- (**best case**) `N-1` compares and `0` exchanges
- (**worst case**) `1/2 N^2` compares and `1/2 N^2` exchanges

------------------------------

#### Shellsort 希尔排序
**idea**: **Insertion Sort** is inefficient because elements really move only one position at the time.
- 希尔排序可以认为是插入排序的升级版
- Move entries more than one position at a time by _**h-sorting**_ the array
- Shellsort 还需要选择合适的 **increment sequence**
  - `3x+1` provided by Knuth
- (**worst case**) O(N^3/2) by Shellsort with the 3x+1 increment

------------------------------

#### Merge Sort 归并排序
- Java sort for objects
- **中心思想**:
  - use auxiliary array (使用了辅助数组)
  - Divide array into two halves
  - Recursively sort each half.
  - Merge two halves.
- **Steps**
  - 假设已有两个subarray: `a[lo]` to `a[mid]`, `a[mid + 1]` to `a[hi]` (假设他们两个为sorted状态)
  - 首先将两个数据copy到`aux[]`中, maintain 3 个指针.
  - 同 **selection sort** 一样, 每次选择余下部分的最小值, 但是最小值只能从两个subarray的指针处获得.
  - 选择后update指针
- Proposition
  - `NlgN` compares and `6NlgN` array accesses to sort any array of size `N`
- **space complexity** : O(N)
- improvement: use insertion sort for small subarrays
  - Mergesort has too much overhead for tiny subarrsys
  - Cutoff to insertion sort for ~ 7 items.
- 小分支: bottom-up mergesort

------------------------------

#### Quick Sort 快速排序
- Java sort for primitive types.
- **Step**
  - **Shuffle** the array. (保证没有worst case)
  - **Partition** (划分的过程在下面) so that, so some `j`
    - entry `a[j]` is in place
    - no larger entry to the left of `j`
    - no smaller entry to the right of `j`
  - **Sort** each piece recursively.
- **Partition的过程**
  - choose the first element to be partitioning element
  - pointer i = 1, j = array.length - 1; repeat until i and j pointers cross
    - Scan i from left to right so long as (a[i] < a[lo])
    - Scan j from right to left so long as (a[j] > a[lo])
    - Exchange a[i] with a[j]
  - Phase II When pointers cross, exchange a[lo] with a[j]
- Summary
  - average case: ~ 1.39 NlgN compares
  - faster than mergesort -- due to less data movement

**3-way partitioning**
3个指针: lt, i, gt

------------------------------

#### Heap Sort 堆排序
- 基于`Heap`这种数据结构

**Array representation**
- Indices start at 1.
- Take nodes in level order.
- No explicit links needed.

**Basic plan** for **in-place Sort**
- (**First pass**)Create max-heap with using **bottom-up method**.
```
for (int k = N/2; k >= 1; k--) {
    sink(a, k, N); // a: array, N: number of elements
}
```
- (**Second pass**)Repeatedly remove the maximum keys. （依次与堆底元素交换位置，并对新root元素做sink操作）
  - Remove the maximum, one at a time.
  - Leave in array, instead of nulling out.
```
while (N > 1) {
    exch(a, 1, N--);
    sink(a, 1, N);
}
```

#### Heap sort:mathematical analysis**
- **Propostiiton**:
  1. Heap construction uses `<= 2N` compares and exchanges
  2. Heap sort uses <= `2NlgN` compares and exchanges.

- **Significance** In-place sorting algorithm with `NlogN` worst-case.

- **Bottom line** Heap sort is optimal for both time and space, **but**:
  1. Inner loop longer than quicksort's.
  2. Makes poor use of cache memory.
  3. Not stable.

------------------------------

#### Sorting algorithms: summary

||inplace?|stable?|worst|average|best|remarks|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|selection|x||N^2/2|N^2/2|N^2/2|N exchanges|
|insertion|x|x|N^2/2|N^2/4|N|use for small N or partially ordered|
|shell|x||?|?|N|tight code, subquadratic|
|quick|x||N^2/2|2NlnN|NlgN|NlogN probabilistic guarantee, **fastest in practice**|
|3-way quick|x||N^2/2|2NlnN|N|improves quicksort in presence of duplicate keys|
|merge||x|NlgN|NlgN|NlgN|NlogN guarantee. stable|
|heap|x||2NlgN|2NlgN|NlgN|NlogN guarantee, in-place|
|???|x|x|NlgN|NlgN|NlgN|holy sorting grail|

------------------------------

### Knuth Shuffle
- 对数组各个元素进行洗牌
- linear time algorithm
**Step**
- In iteration `i`, pick integer r between 0 and i uniformly at random
- Swap a[i] and a[r]

------------------------------

## Others

------------------------------

### ASCII码

- 英文字母对应的ASCII码
  - A-Z 65-90
  - a-z 97-122
------------------------------

### HashMap 和 HashTable
||HashMap|HashTable|
|:---:|:---:|:---:|
|线程安全性|非synchronize|synchronize|
|null值|允许,但只能有一个null值|不允许|
|contains方法|`containsValue()`和`containsKey()`|`contains()` `containsValue()`和`containsKey()`|

------------------------------

##### Java如何使用equals方法
```Java
public final class Date implements Comparable<Date> {
  private final int month;
  private final int day;
  private final int year;
  ...

  public boolean equals(Object y) {
    if (y == this) return true;
    if (y == null) return false;
    if (u.getClass() != this.getClass()) return false;
    Date that = (Date) y;
    对 month, day, year 进行比较, 返回true, false
  }
}
```
------------------------------
##### Java 如何比较两个object相同
Compare each significant field:
- primitive type, use `==`
- object, use `equals()`
- array, apply to each entry
------------------------------
------------------------------
------------------------------
------------------------------
