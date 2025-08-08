class CustomReporter {
  onBegin(config, suite) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);
  }

  onTestBegin(test) {
    console.log(`Starting test ${test.title}`);
  }

  onTestEnd(test, result) {
    const status = result.status;
    const duration = result.duration;
    
    console.log(`Finished test ${test.title}: ${status} (${duration}ms)`);
    
    if (status === 'failed') {
      console.log(`Error: ${result.error?.message}`);
    }
  }

  onEnd(result) {
    console.log(`Finished the run: ${result.status}`);
    console.log(`Total tests: ${result.stats.total}`);
    console.log(`Passed: ${result.stats.passed}`);
    console.log(`Failed: ${result.stats.failed}`);
    console.log(`Skipped: ${result.stats.skipped}`);
  }
}

module.exports = CustomReporter;
