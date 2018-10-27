// interface IStack<T> {
//   push(item: T): IStack<T>;
//   push(items: T[]): IStack<T>;
//   pop(): T | undefined;
//   length(): number;
//   print(): void;
// }

// interface IStackNode<T> {
//   data: T;
//   next: IStackNode<T>;
// }

// export class Stack<T> implements IStack<T> {
//   private head: IStackNode<T>;

//   push (item: T): IStack<T>;
//   push (item: T[]): IStack<T>;
//   push (itemOrArray: T | T[]): IStack<T> {
//     if (itemOrArray instanceof Array) {
//       itemOrArray.forEach(item => this.push(item))
//     } else {
//       let n = {
//         data: itemOrArray as T,
//         next: this.head
//       }
//       this.head = n
//     }
//     return this;
//   }

//   pop(): T | undefined {
//     let n = this.head;
//     if (!n) return undefined;
//     this.head = this.head.next;
//     return n.data;
//   }

//   length() {
//     let n = this.head;
//     let l = 0;
//     while (n) {
//       l++;
//       n = n.next;
//     }
//     return l;
//   }

//   print() {
//     let n = this.head;
//     while(n) {
//       console.log(n.data);
//       n = n.next;
//     }
//   }
// }