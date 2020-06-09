introduction
### Berkeley, CS162, Operating Systems and Systems Programming, Spring 2015
-----------------
# Lecture 1: What is an Operating System?

- Special layer of software that provides appication software access to hardware resources
  - convenient abstraction of complex hardware devices
  - Pretected access to shared resources
  - Security and authentication
  - Communication amongst logical entities



- Program is the thing you write
- Process is a instance you running

- Why you device drivers tend to crash operating systems?
> ?

### Syllabus
- OS Concepts: How to Navigate as a Systems Programmer!
  - Process, I/O, Networks and VM
- Concurrency
  - Threads, scheduling, locks, deadlock, scalability, fairness
- Address Space
  - Virtual mrmory, address translation, protection, sharng
- File systems
  - i/o devicds, file objects, storage, naming, caching, performance, paging, transactions, databases
- Protocols, N-Tiers, RPC, NFS, DHTs, Consistency, Scalability, multicast
- Relability & Security
  - Fault tolerance, protection, security
- Cloud Infrastructure


#### What is an Operating System?
- Referee
  - Manage sharing of resources, Protection, Isolation
    - Resource allocation, isolation, commmunicaiton
- Illusionist
   - Provide clean, easy to use abstractions of physical resources
    - Infinite memory, dedicated machine
    - Higher level objects: files, users, messages
    - Masking limitations, virtualization
- Glue
  - Common servises
    - storage, Window system, Networking
    - Sharing, Authorization
    - Look and feel

### In conclusion...
- Operating systems provide a virtual machine abstraction to handle diverse hardware
- Operating systems coordinate resources and protect users from each other
- Operatingsystems simplify application development by providing standard services
- Operating systems can provide an array of fault containment, fault tolerance, and fault recovery


-------------------
# Lecture 2:

## Four dundamental OS Concepts
- Threads
  - singleuniqueexecutioncontext
  - Program Counter, Registers, Execution Flags, Stack
- Address Space w/ translation
  - Programs execute in an address space that is distinct from the memory space of the physical machine
- Process
  - An isntance of an executing program is a process conssiting of an address space and one or more threads of control
- Dual Mode operation/protection
  - Only the "system" has the ability to access certain resources
  - The OS and the hardware are protected from user programs and user programs are isolated from one another by controlling the translation from program virtual addresses to machine phsical addresses.

### Run Program
[Fetch Decode Execute Cycle in more detail](https://www.youtube.com/watch?v=jFDMZpkUWCw)
- Load instruction and data into memory
- Fetch - Decode - execute
  - Fetch: 将program counter (PC) 指向的内存地址中的指令copy到指令寄存器中
  - Decode: 从指令寄存器中提取操作数和操作码
  - Execute: 执行，如果需要将操作数从指令中指定的地址copy到寄存器中，接着根据操作码和操作数执行相应的操作
  - Write results to registers/memory
  - PC = next Instruction (PC)
  - Repeat

### First OS Concept: Thread of control
- **Thread**: Single unique execution context
  - Program Counter, Registers, Execution Flags, Stack
- A thread is executing on a processor when it is resident in the processor registers (如何定义一个线程**正在**一个处理器中运行？)
- PC register holds the address of executing instruction in the thread.
- Certain registers hold the context of thread
- Registers hold the root state of the thread


### Second OS Concept: Programs's Address space
- **Address space** --> the set of accessible addresses + state associated with them
- Address Space: container of: Code, Static Date, heap, stack...

### Fourth OS Concept: Dual Mode Operation
- **Hardware** provides at least two modes:
  - "Kernel" mode (or "supervisor" or "protected")
  - 'User' mode: Normal programs executed
- What is needed in the hardware to support "dual mode" operation?
  - a bit of state (user/system mode bit)
  - Certain operations / actions only permitted in system/kernel mode
  - User -> Kernel transition sets system mode AND saves the user PC
  - kERNEL -> User transition clears system mode AND restores appropriate user PC

----------------------
# Lecture 3:

#### Process Control Block
- Kernel represents each process as a process control block (PCB)
  - Status (running, ready, blocked, ...)
  - Register state (when not ready)
  - Process ID (PID), User, Executable, Priority, ...
  ]
  - Execution time, ...
  - Memory space, translation, ...
- Kernel Scheduler maintains a data structure containing the PCBs

### Kernel System Call Handler
- Vector through well-defined syscall entry points!
  - Table mapping system call number Handler
  - Locate arguments
    - In regiters or on user stack
- Copy arguments
  - From user memory into kernel memory
  - Protect kernel from malicious code evading checks
- Validate arguments
  - Protect kernel from errors in user code
- Copy results back
  - into user memory

### How do we take interrupts safely?
- Interrupt vector
  - Limited number of entry points into kernel
- Kernel interrupt stack
  - Handler works regardless of state of user code
- Interrupt masking
  - Handler is non-blocking
- Atomic transfer of control
- Transparent resartable execution

### Can a process create a process?
- Yes
- **Fork** creates a copy of process

### UNIX Process Management
- UNIX fork - system call to create a copy of the current process, and start it running (No arguments)
- UNIX exec - system call to change the program being run by the current process
- UNIX wait - system call to wait for a process to finish
- UNIX signal - system call to send a notification to another process

### Shell
- A shell is a control system
  - Allows programmer to create and manage a set of programs to do some task
  - Windows, MacOS, Linux all have shells

#### I/O & Storage Layers
Application / Service --> High level I/O --> Low Level I/O --> Syscall --> File System --> I/O Driver

-----------------
# Lecture 4: Introduction to I/O (continued), Sockets, Networking

### Sockets:
- abstraction of a network I/O queue
  - Mechanism for inter-process communication
  - Embodies one side of  a Communication channel
  - First introduced in 4.2 BSD UNIX: big innovation at time

### Namespaces for communication over IP
- Hostname
  - www.eecs.berkeley.edu
- IP address
  - 128.32.244.172
- Port Number
  - 0 - 1023 are **well known* or **system** ports
  - 1024 - 49151 are **registered** ports
  - 49152 - 65535 are **dynamic** or **private**

### Socket Setup over TCP/IP
- Server Socket:Listens fornew conncections
  - Produces new sockets for each unique conncection
- Things to rememver:
  - Connection involves 5 values:
    - Client Addr, Client Port, Server Addr, Server Port, Protocol
  - Often, Client Port **randomly** assigned
  - Server Port often well known

-----------------
# Lecture 5: Concurrency(Processes and Threads)

### LIfecycle of a Process
As a process executes, it changes state:
- new: The process is being created
- ready: The process is warting to running
- running: Instructions are being executed
- waiting: Process waiting for some event to occur
- terminated: The process has finishes execution

### Modern Process with threads
- Thread: a sqquential execution stream within process (sometimes called a "Lightweight process")
- Multithreading: a single program made up of a number of different concurrent activities

### Single and Multithreaded Processes
- Threads encapsulate concurrency: "Active" component
- Address spaces encapsulate protection: "Passive" part
  - Keeps buggy program from trashing the systems
- Why have multiple threads per address space?

### Thread state
- State shared by all threads in process/addr space
  - Content of memory (global variables, heap)
  - I/O state (file descriptors, network connections, etc)

- State "private" to each thread
  - Kept in Thread Control Block (TCB)
  - CPU regiters (including, program counter)
  - Execution stack

### Use of Threads
- What does `ThreadFork()` do?
  - Start independent thread running given procedure
- What is the behavior here?

### Dispatch Loop
- Conceptually, the dispatching loop of the operation system looks as follows:
```
Loop {
    RunThread();
    ChooseNextThread();
    SaveStateOfCPU(curTCB);
    LoadStateOfCPU(newTCB);
}
```
- This is an infinite loop
  - One could argue that this is all that the OS does

### Running a thread
- How do I run a thread?
  - Load its state (registers, PC, stack pointer) into CPU
  - Load environment (virtual memory space, etc)
  - Jump to the PC
- How does the dispatcher get control back?
  - Internal events: thread returns control voluntarily
  - External events:thread gets preempted

**process is container which has address space and we pt thread in it**

### Summary
- Processes have two parts
  - Threads (Concurrency)
  - Address Spaces (Protection)
- Concurrency accomplished by multiplexing CPU Time:
  - Unloading current thread (PC, registers)
  - Loading new thread (Pc, registers)
  - Such context switching may be voluntary or involuntary

-----------------
### Lecture 6: Concurrency (Continued), Synchronization (Start)

*** Recall: Execution Stack Example
- Stack holds temporaray results
- Permits recursive execution
- Crucial to modern languages

##### Kernel versus User-Mode threads
- We have been taking about Kernel Threads
  - Native threads supported directly by the kernel
  - Every thread can run or block indepenently
  - One process may have several threads waiting on different things
- Downside of kernel threads: a bit expensive
  - Need to make a crossing into kernel mode to schedule
- Even lighter weight option: User Threads
  - User program provides scheduler and thread package
  - May have several user threads per keunel thread
  - User threads may be scheduled non- premptively relative to each other (only switch on yield())
  - Cheap
- Downside of user threads:
  - When one thread blocks on I/O, all thread block
  - Kernel connot adjust shceduling among all threads
  - Option: Scheduler Activations

##### Multixxx

- **Multiprocessing** -- Multiple CPUs
- **Multiprogramming** -- Multiple Jobs or Processes
- **Multithreading** -- Multiple threads per Process

##### Timer may trigger thread switch
- thread-tick
  - updates thread counters
  - If quanta exhausted, sets yield flag
- thread-yeild
  - On path to rtn from interrupt
  - Sets current thread back to READY
  - Pushes it back on ready_list
  - Calls schedule to select next thread to run upon iret

##### Summary
- Processer have two parts
  - Threads (Concurrency)
  - Address Spaces (Protection)
- Concurrency accomplished by multiplexing CPU Time:
  - Unloading current thread (PC, registers)
  - Loading new thread (PC, registers)
  -Such context switching may be voluntary (yield(), I/O operations) or involuntary (timer, other interrupts)
- Protection accomplished restricting access:
  - Memory mapping isolates processes from each another
  - Dual-mode for isolating I/O, other resources
- Concurrent threads are a very useful abstractions
  - Allow transprent overlapping of computation and I/O
  - Allow use of parallel processing when available
- Concurrent threads introduce problems when accessing shared databases
  - Programs must be insensitive to arbitrary interleavings
  - Without careful design, shared variables can becomes completely inconsistent

-----------------
### Lecture 7: Synchronization (Continued)

##### Atomic Operations
- Atomic operation: an operation that always runs to completion or not at allocation
- It is _indivisible:_ it cannot be stopped in the middle and state cannot be modified by someone else in the middle
- Fundamental building block - if no atomic operations, then hve no way for threads to work together

##### Definitions
- **Syschronization**: using atomic operations to ensure cooperation between Threads
- **Mutual Exclusion**: ensuring that only one thread does a particular thing at a time
- **Critical Section**: piece of code that only one thread can execute at once. Only one thread at a time will get into this section of code.
- **Lock**: prevents someone from doing something
  - Lock before entering critical section and before accessing shared data
  - Unlock when leaving, after accessing shared data
  - Wait if locked

##### Solution

- **Lock.Acquire()**: wait until lock is free, then grab
- **Lock.Release()**: Unlock, waking up anyone waiting
- Once again, section of code between `Acquire()` and `Release()` called a **Critical Section**

##### Summary
- Important concept: Atomic Operations
  - An operation that runs to completion or not at all
  - These are the primitives on which to construct various synchronization primitives
- Talked about hardware atomicity primitives:
  - Disabling of Interrupts, test&set, swap, comp&swap, load-linked/store comditional
- Showed several constructions of Locks
  - Must be very careful not to waste/tie up machine resources
    - Shouldn't disable interrupts for long
    - Shouldn't spin wait for long
  - Key idea: Separate lock variable, use hardware mechanisms to protect modifications of that variable
- Talked about Semaphores, Monitors, and Condition Variables
  - Higher level constructes that are harder to "screw up"

-----------------

### Lecture 8:

##### Problem: Busy-Waiting for Locks
- Positives for this solution
  - Machine can reveive interrupts
  - User code can use this locks
  - Works on a multiprocessor
- Negatives
  - This is very inefficient because the busy-waiting thread will consume cycles waiting
  - Waiting thread may take cycles away from thread holding lock (no one wins)
  - Priority Inversion: If Busy-waiting thread has higher priority than thread holding lock --> no progress!

##### Semaphores are like integers, except:
- No negative values
- Only operations allowed are P are V - can't read or write value, except to set it initially
- Operations must be atomic
  - Two P's together can't decrement value below zero
  - Similarly, thread going to sleep in P won't miss wakeup from V - even if they both happen at same time
- **Semaphore** 这个非负数表示着线程池中可用的线程数量

##### Producer-consumer with a bounded buffer
- Prodecer --> Buffer --> Consumer
- Problem Definition
  - Producer puts things into a shared buffer
  - Consumer takes them out
  - Need synchronization to coordinate producer/consumer
- Don't want producer and consumer to have to work in lockstep, so put a fixed-size buffer between them
  - Need to synchroniza access to this Buffer
  - Producer needs to wait if buffer is full
  - Consumer needs to wait if buffer is empty

- Definition: **Monitor**: a lock and zero or more condition variables for managing concurrent access to shared data
  - Use of Monitors is a programming paradigm
  - Some languages like Java provide monitors in the language

- The lock provides mutial exclusion to shared data:
  - Always acquire before accessing shared data structure
  - Always release after finishing with shared data
  - Lock initially free

#### Semaphore 和 Monitor 是两个十分重要的概念

-----------------

### Lecture 9:

##### Monitor Conclusion
- Monitors represent the logic of the program
  - Wait if necessary
  - Signal when change something so any waiting threads can proceed

##### Scheduling Policy Goals/Criteria
- Minimize Response Timer
  - Minimize elapsed time to do an operation (or job)
  - Response time is what the user sees:
    - Time to echo a keystrike in editor
    - Time to compile a program
    - Real-time Tasks: Must meet deadlines imposed by World
- Maximize Throughput
  - Maximize operations (or jobs) per second
  - Throughput related to response time, but not identical:
  - Minimizing response time will lead to more context seitching than if you only maximized throughput
- Two parts to maximizing throughput
  - Minimize overhead (for example, context-switching)
  - Efficient use of resources (CPU, disk, memory, etc)
- Fairness
  - Share CPU among users in some equitable way
  - Fairness is not minimizing average response time:
    - Better average response time by making system less fair

-----------------

### Lecture 10: Scheduling (Continued), Deadlock

##### Round Robin (RR)
- FCFS Scheme: Potentially bad for short jobs!
  - Depends on submit order
- **Round Robin Scheme**
  - Each process gets a small unit of CPU time (time quantum), usually 10-100 milliseconds
  - After quantum expires, the process is preempted and added to the end of the ready queue.
  - n Hprocesser in ready queue and time quantum is q

**Performance**
- _q_ large --> FCFS
- _q_ small --> Interleaved (really small --> hyperthreading?)
- _q_ must be large with respect to context switch, otherwise overhead is too high (all overhead)

- Round-Robin Pros and Cons:
  - Better for short jobs, Fair(+)
  - Context-switching time adds up for long jobs (-)

##### Handling differences in importance: Strict Priority Scheduling
- Execution Plan
  - Always execute highest-priority runable jobs to completion
  - Each queue can be processed in Round-Robin fashion with some time-quantum
- Problems:
  - Starvation:
    - Lower priority jobs don't get to run because higher priority tasks always running
  - Deadlock:Priority Inversion
    - Not strictly a problem with priority scheduling,
- How to fix problems?
  - Dynamic priorities - adjust base-level priority up or down based on heuristics about interactivity, locking, burst behavior, etc...

**Shortest Job First (SJF)**
**Shortest Time to Completion First**
**Shortest Remaining Time First (SRTF)**
**Shortest Remaining Time to Complition First (SRTCF)**

##### Discussion
- SJF/SRTF are the best you can do at minimizing average response time
  - Provably optimal (SJF among non-preemptive, SRTF among preemptive)
  - Since SRTF is always at least as good as SJF, focus on SRTF
- Comparison of SRTF with FCFS and RR
  - What if all jobs the same length?
    - SRTF becones the same as FCFS (i.e. FCFS is best can do if all jobs the same length)
  - What if jobs have vauying length?
    - SRTF (and RR): short jobs not stuck behind long ones

##### SRTF Pros & Cons
- Optimal (average response time) (+)
- Hard to predict future (-)
- Unfair (-)


-----------------

### Lecture 11:

- When should you simple buy a faster computer? and when should you buy a algorithms?
  - Most scheduling algorithms work fine in the "linear" portion of the load curve, fail otherwise.
  - 当利用率接近 **100%** 时, Response Time 响应时间无限接近正无穷.

##### Starvation vs Deadlock
- Circular dependency makes deadlock (每次Deadlock一定会有一个Graph中的cycle)
- A _**deadlock**_ is a state in which each member of a group is waiting for some other member to realse a lock
- A **livelock** is similar to a **deadlock**, except that the states of the processes involved in the livelock constantly change with regard to one another
- Starvation: thread waits indefinitely
  - Example, low-prority thread waiting for resources constantly in use by high-priority threads
- Deadlock: circular waiting for resources
  - Thread A owns Res 1 and is waiting for Res 2
  - Thread B owns Res 2 and is waiting for Res 1
- Deadlock is a kind of Starvation


##### Four requirements for Deadlock
- **Mutual exclusion**
  - Only one thread at a time can use a resource.
- **Hold ad wait**
  - Thread holding at least one resource is waiting to acquire additional resources held by other threads
- **No preemption**
  - Resources are released only voluntarily by the thread holding the resource, after thread is finished with it.
- **Circular wait**
  - There exists a set of waiting threads

##### Methods for Handling Deadlocks
- Allow system to enter deadlock and then recover
  - Requires deadlock detectio algorithm
  - Some technique for forcibly preempting resources and/or terminating tasks
- Ensure that system will never enter a deadlock
  - Need to monitor all lock acquisitions

##### Address translation
- Address Space:
  - All the addresses and state a process can touch
  - Each process and kernel has different address space
- Consequently, two views of memory:
  - View from the CPU (what program sees, virtual memory)
  - View from mrmory (physical memory)
  - Translation box (MMU) converts between the two views
- Tranlation essential to implementing protection

-----------------

### Lecture 13:

##### Caching Concept
- Cache: a repository for copies that can be accessed more quickly than the original
  - Make frequent case fast and infrequent case less dominant
- Caching underlies many of the techniques that are used today to make computers fast
  - Can chche: memory locations, address tranlations, pages, file blocks, file names, network routes, etc...
-----------------

### Lecture 14:

- Caching is the key to memory system perfomance

##### Memory Hierarchy
- Take advantage of the principle of locality to:
  - Present as much memory as in the cheapest technology
  - Provide access at speed offered by the fastest technology
-----------------

### Lecture 15:

##### Impact of caches on Operating Systems
- Indirect - dealing with cache effects
- Precess scheduling
- Impact of thread scheduling on cache performance
- Desinging operating system data structures for cache performane

##### Summary
- A cache of translations called a "Translation Lookaside Buffer" (TLB)
  - Relatively small number of entries (< 512)
  - Fully Associative (Since conflict missed expensive)
  - TLB entries contain PTE and optional process ID
- On TLB miss, page table must be traversed
  - If located PTE is invalid, cause Page Fault
- On context switch/change in page table
  - TLB entries must be invalidated somehow
- Tlb is logically in front of cache

-----------------

### Virtual memory
- Three memory problems:
  - Not enough RAM
  - Holes in our address space
  - Programs writing over each other
- What is virtual Memory?
  - Indirection
  - How does it solve the problems?
  - page Tables and Translation
- Implementing virtual memory
  - Where do we store the page tables?
  - Making tranlation fast
- Virtual memory and caches

**Virtual Memory**: Separately map each program's memory space to the RAM memory space
virtual memory --> physical memory

#### Page Tables
(Keeping track of VA --> PA mappings)
- divided memory up into chunks (pages) instead of words
- 原来一个mapping可以管理4byte的内存, 使用page, 一个mapping可以管理4kB的内存

**How long does a page fault take?**
- Page Table Entry says the page is on disk (1 cycle)
- Hardware (CPU) generates a page fault exception (100 cycles)
- The hardware jumps to the OS page fault handler to clean up (10000 cycles)
  - The OS chooses a page to evict from RAM and write to disk
  - If the page is dirty, it needs to be written back to disk first (40000000 cycles)
  - The OS then reds the page from disk and puts it in RAM (40000000 cycles)
  - The OS then changes the Page Table to map the new page
- The OS jumps back to the instruction that caused the page fault. (10000 cycles)
(**80 million**)

#### Memory protection
**Linux** defines how that address space is used:
- 1GB reserved for kernel
- Program static data at the bottom
- Heap grows up
- Stack grows down (and has a fixed maximum size)

#### Making VM fast: the TLB (TLB的出现是为了让虚拟内存的使用变得更快)
TLB: Translation Lookaside Buffer

#### Page Replacement Policies
- Why do we care about Replacement Policy?
  - Replacement is an issue with any cache
  - Particularly important with pages
    - The cost of being wrong is high
    - Must keep imortant pages in memory, not toss them out
- **FIFO** (First In, First Out):
  - Bad, because throws out heavily used pages instead of infrequently used pages
- **MIN** (Minimum):
  - Replace page that won't be used for the longest time
  - Makes good comparison case
- **RANDOM**:
  - Typical solution for TLB's. Simple hardware
  - Pretty unpredictable - makes it hard to make real-time guarantees
- **LRU** (Least Recently Used)
  - Replace page that hasn't been used for the longest time
  - Programs have locality, so if something not used for a while, unlikely to be used in the near future.
  - Seems like LRU should be a good approximation to MIN.
  - use a **list** to implement LRU
    - On each use, remove page from list and place at head
    - LRU page is at tail
- Does adding memory reduce number of page faults?
  - YES for LRU and MIN
  - Not necessarily for FIFO

#### Implementing LRU
- Perfect
  -  Timestamp page on each reference
  - Keep list of pages orered by time of reference
  - Too expensive to implement in reality for many reasons
- **Clock Algorithm** : Arrange physical pages in circle with single clock hand
  - Approximate LRU (approx to approx to MIN)
  - Replace an **old** page, not the **oldest** page
  - 轮询, 当bit位是1是,代表最近使用过, clear为0. 当bit位是0, selected candidate for replacement
- **Nth chance algorithm** : Give page N chances

-----------------

### Lecture 16:

The Goal of the I/O Subsystem
- Provide uniform interfaces, despite wide range of different devices

#### Devices
- Block Devices: disk drives, tape drives, FVD-ROM
  - Access blocks of data
  - Commands include `open()`, `read()`, `write()`, `seek()`
  - Raw I/O or file-system access
  - Memory-mapped file access possible
- Character Devices: keyboards, mice, serial ports, some USB devices
  - Single characters at a time
  - Commands include `get()`, `put()`
  - Libraries layered on top allow line editing
- Network Devices: Ethernet, Wireless, Bluetooth
  - Different enough from block/character to have own interface
  - Unix and Windows include **socket** interface
- Usage: pipes, FIFOs, streams, queues, mailboxes

#### Tranferring Data To/From Controller
- Programmed I/O
  - Each byte tranferred via processor in/out or load/store
  - Pro: simple hardware, easy to program
  - Con: Consumes processor cycles proportional to data size
- Direct Memory Access:
  - Give controller access to memory bus
  - Ask it to tranfer data blocks to/from memory directly

##### I/O Device Notifying the OS
- The OS needs to know when:
  - The I/O device has completed an operation
  - The I/O operation has encountered an error
- I/O Interrupt:
  - Device generates an interrupt whenever it needs service
- Polling:
  - OS periodically checks a device-specific status register
- Actual devices combine both poling and interrupts

#### Device Drivers
- Device Driver: Device-specific code in the kernel that interacts directly with the device hardware
  - Supports a standard, internal interface
  - Same kernel I/O system can interact easily with different device drivers
  - Special device-specific configuration supported with the system call


-----------------

### Lecture 17:

- Key to using disk effectively (especially for file systems) is to minimize seek and rotational delays
- SSD: writes 10x reads, erasure 10x writes
-----------------

### Lecture 18:

#### File System:
- Layer of OS that transforms block interface of disks (or other block devices) into Files, Directories, etc.
- File System Components
  - Disk Management: collecting disk blocks into files
  - Naming: Interface to find files by name, not by block
  - Protection: Layers to keep data secure
  - Reliability

- Components of a File System
  - File path --> File number --> Data blocks

#### FAT(File Allocation Table)
- File is collection of disk blocks
- FAT is linked list 1-1 with blocks
- File Number is index of root of block list for the file
- Follow list to get block
- Unused blocks -- FAT free list
-----------------

### Lecture 19:

#### NTFS
- New Technology File System (NTFS)
- Variable length extents
  - Rather than fixed blocks
- Everything (almost) is a sequece of pairs<attribute:value>
  - Meta-data and data
- Directories organized in B-tree structure by default
-----------------
-----------------
-----------------
-----------------
### Reference 
- CS162,Operating Systems and Systems Programming, Spring 2015
  - [PPT](https://pan.baidu.com/s/1XNjAT0jwD_OO-dAgTVfmpw)
-----------------
