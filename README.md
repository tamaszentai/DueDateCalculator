<h1> DueDateCalculator</h1>
Given coding homework to make a Due Date Calculator using the candidate's favorite programming language

<h2>Running the calculator:</h2>
<ol>
<li>Make sure Node Package Manager is installed on the device. <a href="https://nodejs.org/en/"></a></li>
<li>Open the terminal, navigate to the project folder and run the following command: npm install. This command will install the dependencies for the project.</li>
<li>At line 46 inputDate variable takes any date in the following format:</li>
<i><b>new Date(2019, 5, 11, 5, 23)</b></i>
<ul>
  <li>Year: 4-digit year.</li>
  <li>Month: Month of the year (0-11). Month is zero-indexed. Defaults to 0 if omitted.</li>
  <li>Day: Day of the month (1-31). Defaults to 1 if omitted.</li>
  <li>Hour: Hour of the day (0-23). Defaults to 0 if omitted.</li>
  <li>Minutes: Minutes (0-59). Defaults to 0 if omitted.</li>
</ul>
<li>At line 38 the calculateDueDate function takes the inputDate and the turnaround value (hour)</li>
<li>Run the calculator with the following terminal command: node index.js</li>
<li>Run the tests with the following terminal command: npm test</li>
</ol>

Used language: JavaScript(Node.js)
<br>
Used testing framework: Mocha.js


