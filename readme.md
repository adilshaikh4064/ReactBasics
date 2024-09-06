# React and its insights

- react is a Javascript library(not a framework).
- its purpose is to build and deploy frontends so smoothly as ever.

# header1

## header2

### header3

> this is a blockqoute.

### unordered list
- adil
- 4064
    - sublist
        - sub sublist
            - sub sub sub list

### ordered list 
1. adil
2. 4064
    1. sublist
        1. sub sublist
            1. sub sub sublist

- [link to google](https//:www.google.com)
- ![link to image]()

``` c++
void dfs(int node, vector<bool>& visited, vector<vector<int>>& graph) {
    visited[node] = true;
    // Perform operations on the current node
    
    for (int neighbor : graph[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor, visited, graph);
        }
    }
}

int main() {
    int n = 10; // Number of nodes
    vector<vector<int>> graph(n);
    vector<bool> visited(n, false);
    
    // Build the graph
    
    int startNode = 0; // Starting node for DFS
    dfs(startNode, visited, graph);
    
    return 0;
}
```
### table

| Header 1 | Header 2 |
| -------- | -------- |
| Row 1    | Data 1   |
| Row 2    | Data 2   |


**this is bold**
*this is italic*

~~this is strikethrough~~

---
title: "My Blog Post"
date: "2024-09-06"
author: "John Doe"
tags: ["markdown", "blog"]
---

<div style="color: red;">
  This is a red text.
</div>

