import './App.css'
import Structure from './Test/Structure';

const data = [
  {
    id: 1,
    name: "Data Stucture",
    type: "folder",
    children: [
      {
        id: 2,
        name: "Arrays",
        type: "file",
        content: {
          title: "Arrays",
          links: [
            "https://www.geeksforgeeks.org/data-structures/arrays/",
            "https://www.tutorialspoint.com/data_structures_algorithms/data_structures_arrays.htm",
            "https://www.javatpoint.com/data-structure-array",
          ],
          tags: [
            "Data Structure",
            "Arrays",
            "Linear Data Structure",
            "Static Data Structure",
          ],
          notes: "An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. It is a linear data structure where elements are stored in a sequential manner. Arrays are used to implement other data structures like stacks, queues, heaps, etc.",
          code: {
            C: '#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    for (int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
            Python: "arr = [1, 2, 3, 4, 5]\nfor i in arr:\n    print(i)",
            Java: 'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        for (int i : arr) {\n            System.out.print(i + " ");\n        }\n    }\n}',
          },
        },
      },
      {
        id: 3,
        name: "Linked List",
        type: "file",
        content: {
          title: "Linked List",
          links: [
            "https://www.geeksforgeeks.org/data-structures/linked-list/",
            "https://www.tutorialspoint.com/data_structures_algorithms/data_structures_linked_list.htm",
            "https://www.javatpoint.com/data-structure-linked-list",
          ],
          tags: [
            "Data Structure",
            "Linked List",
            "Linear Data Structure",
            "Dynamic Data Structure",
          ],
          notes: "A linked list is a linear data structure where each element is a separate object. Each element (or node) of a list comprises two items - the data and a reference (or link) to the next node in the sequence. The first node is called the head and the last node is called the tail.",
          code: {
            C: '#include <stdio.h>\nstruct Node {\n    int data;\n    struct Node* next;\n};\nint main() {\n    struct Node* head = NULL;\n    return 0;\n}',
            Python: 'class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\nhead = None',
            Java: 'class Node {\n    int data;\n    Node next;\n}\nNode head = null;',
          },
        },

      },
    ],
  },
  {
    id: 4,
    name: "Algorithms",
    type: "folder",
    children: [
      {
        id: 5,
        name: "Basic",
        type: "folder",
        children: [
          {
            id: 6,
            name: "Sorting",
            type: "file",
            content: {
              title: "Sorting",
              notes: "Sorting is the process of arranging...",
              links: [],
              tags: [],
              code: {}
            }
          },
        ],
      },
    ],
  },
];

const ListItems = ({ list }) => {
  return (
    < div key={list.id} className="container">
      {list.map((node) => (
        <div key={node.id}>
          <span>{node.name}</span>
          {node.type === "file" && (
            <div className="content">
              <h2>{node.content.title}</h2>
              <p>{node.content.notes}</p>
              <div className="links">
                {node.content.links.map((link, index) => (
                  <a className='link' key={index} href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                ))}
              </div>
              <h2>Tags</h2>
              <div className="tags">
                {node.content.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="code">
                {Object.entries(node.content.code).map(([lang, code], index) => (
                  <pre key={index}>
                    <code>{code}</code>
                  </pre>
                ))}
              </div>
            </div>
          )}        
          {node.children && <ListItems list={node.children} />}
        </div>
      )
      )}
    </div>
  )
};


function App() {

  return (
    <>
      {/* <div className="main">
        <div className="wrapper">
          <ListItems list={data} />
        </div>
      </div> */}
      <Structure/>
    </>
  )
}

export default App
