function calculateOperations() {
    var n = parseInt(document.getElementById('number').value);

    if (isNaN(n) || n < 0) {
      alert("Please enter a non-negative integer.");
      return;
    }

    var factorial = 1;
    var sum = 0;

    // Calculate nth factorial using a While Loop
    var i = 1;
    while (i <= n) {
      factorial *= i;
      i++;
    }

    // Calculate sum of the first n numbers using a Do While Loop
    i = 1;
    do {
      sum += i;
      i++;
    } while (i <= n);

    // Calculate average of the first n numbers using a For Loop
    var average = 0;
    for (i = 1; i <= n; i++) {
      average += i;
    }
    average /= n;

    // Display results
    document.getElementById('results').innerHTML =
      `<p>${n} factorial is: ${factorial}</p>` +
      `<p>Sum of the first ${n} numbers is: ${sum}</p>` +
      `<p>Average of the first ${n} numbers is: ${average.toFixed(2)}</p>`;
  }