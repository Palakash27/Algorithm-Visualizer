# Sorting Visualizer

This project is a visualizer for various sorting algorithms, implemented in JavaScript using the React library. It allows users to see how the algorithms work by visualizing the sorting process in real-time, using an array of bars that represent the elements being sorted. The user can choose the size of the array and the sorting algorithm to use, and then start the sorting process by clicking the "Sort" button.

## Features

The user can choose the size of the array to be sorted, using buttons i.e. 10, 20, 35, 50
The user can choose the speed of the sorting, using buttons like Sloooow, Medium, Fast and Flash
The user can choose the sorting algorithm to use from a dropdown menu, which includes bubble sort, selection sort, insertion sort, quick sort, merge sort, and heap sort.
The user can start the sorting process by clicking the "Sort" button. The sorting process is visualized in real-time, with the bars being rearranged as the elements are being sorted.
The user can reset the array to its original state by clicking the "Reset" button.
The user can view quick facts about each sorting algorithm after selecting the algorithm from the dropdown menu.
The user can view the time consumed by the sorting algorithm after it is done by looking at the "Time consumed" label.

## Implementation Details

The project is implemented using the React library and consists of several components. The main component is the App component, which is the top-level component that manages the state and renders the other components.

The Controls component is responsible for rendering the controls (dropdown menu, and buttons) that allow the user to choose the array size, sorting speed, sorting algorithm, and start the sorting process. It receives props from the App component and passes them down to the relevant child components.

The ArrayBars component is responsible for rendering the array of bars that represent the elements being sorted. It receives the array of values as a prop from the App component and renders a bar for each value, using the value to set the height of the bar.

The sorting algorithms are implemented as separate functions that are called by the App component when the "Sort" button is clicked. The App component also contains the logic for pausing and resuming the sorting process, as well as resetting the array to its original state.

The project uses CSS for styling and layout, and uses the setTimeout function to delay the highlighting of the bars for a certain period of time.

## Conclusion

This project is a useful tool for understanding how different sorting algorithms work and for comparing their performance. It allows users to see the sorting process in action and to get a feel for how the algorithms work. It can be used as a learning tool for those who are new to sorting algorithms, or as a reference for thosewho are already familiar with them.

One limitation of this project is that it only visualizes the sorting process and does not provide a detailed analysis of the time and space complexity of the algorithms. However, it does provide quick facts about each algorithm that give a brief overview of their performance characteristics.

Overall, this project is a useful and educational tool for anyone interested in learning about sorting algorithms and how they work. It provides a fun and interactive way to visualize the sorting process and to see how different algorithms compare in terms of performance.
