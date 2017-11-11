//
// Charts
//
// Setup your custom charts based on chart.js plugin
// Read More: http://www.chartjs.org/docs/latest/
//

$(function(){
	// line carts
	var chartPayout = document.getElementById("js-chart-payout"),
		chartEarnings = document.getElementById("js-chart-earnings"),
		chartEarnings = document.getElementById("js-chart-earnings"),
		chartRevenue = document.getElementById("js-chart-revenue"),

		chartNewsletters = document.getElementById("js-chart-newsletters"),
		chartSubscribers = document.getElementById("js-chart-subscribers"),
		chartConversion = document.getElementById("js-chart-conversion"),

		// vertical bar charts
		chartProfitQ1 = document.getElementById("js-chart-profit-q1"),
		chartProfitQ2 = document.getElementById("js-chart-profit-q2"),
		chartProfitQ3 = document.getElementById("js-chart-profit-q3"),
		chartProfitQ4 = document.getElementById("js-chart-profit-q4"),
		chartProfitQ5 = document.getElementById("js-chart-profit-q5"),
		chartProfitQ6 = document.getElementById("js-chart-profit-q6"),

		// pie charts
		chartSummary1 = document.getElementById("js-chart-summary1"),
		chartSummary2 = document.getElementById("js-chart-summary2"),
		chartSummary3 = document.getElementById("js-chart-summary3"),

		// used in performance.html page
		chartSales = document.getElementById("js-chart-sales"),
		chartCustomers = document.getElementById("js-chart-customers"),
		chartProfit = document.getElementById("js-chart-profit");

	var lineChartPayoutData = {
	    labels: ["January 1", "January 5", "January 10", "January 15", "January 20", "January 25"],
	    datasets: [{
			label: "Sold",
			fill: true,
			lineTension: 0,
			backgroundColor: 'rgba(163,136,227, 0.1)',
			borderWidth: 2,
			borderColor: "#886CE6",
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			//pointStyle: 'cross',
			pointRadius: 0,
			pointBorderColor: "#fff",
			pointBackgroundColor: "#2a2f37",
			pointBorderWidth: 2,
			pointHoverRadius: 6,
			pointHoverBackgroundColor: "#FC2055",
			pointHoverBorderColor: "#fff",
			pointHoverBorderWidth: 2,
			//pointRadius: 4,
			//pointHitRadius: 5,
			data: [40, 32, 42, 28, 53, 34],
			spanGaps: false
	    }]
	};

	var lineChartEarningsData = {
	    labels: ["January 1", "January 5", "January 10", "January 15", "January 20", "January 25"],
	    datasets: [{
			label: "Sold",
			fill: true,
			lineTension: 0,
			backgroundColor: 'rgba(0,172,255, 0.1)',
			borderWidth: 2,
			borderColor: "#00AAFF",
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			//pointStyle: 'cross',
			pointRadius: 0,
			pointBorderColor: "#fff",
			pointBackgroundColor: "#2a2f37",
			pointBorderWidth: 2,
			pointHoverRadius: 6,
			pointHoverBackgroundColor: "#FC2055",
			pointHoverBorderColor: "#fff",
			pointHoverBorderWidth: 2,
			//pointRadius: 4,
			//pointHitRadius: 5,
			data: [25, 45, 25, 32, 15, 28],
			spanGaps: false
	    }]
	};


	var lineChartRevenueData = {
	    labels: ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31"],
	    datasets: [{
			label: "Revenue",
			fill: true,
			lineTension: 0,
			backgroundColor: 'rgba(0,172,255, 0.1)',
			borderWidth: 2,
			borderColor: "#00AAFF",
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			//pointStyle: 'cross',
			pointRadius: 4,
			pointBorderColor: "#00AAFF",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 2,
			pointHoverRadius: 6,
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "#00AAFF",
			pointHoverBorderWidth: 2,
			//pointRadius: 4,
			//pointHitRadius: 5,
			data: [20, 24, 32, 34, 38, 35, 37, 40, 53, 60, 62],
			spanGaps: false
	    }, {
	    	label: "Profit",
	        fill: true,
	        lineTension: 0,
	        backgroundColor: 'rgba(163,136,227, 0.1)',
	        borderWidth: 2,
	        borderColor: "#886CE6",
	        pointRadius: 4,
			pointBorderColor: "#886CE6",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 2,
			pointHoverRadius: 6,
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "#886CE6",
			pointHoverBorderWidth: 2,
	        data: [48, 54, 53, 58 ,56, 62, 61, 59, 76, 78, 80],
	        spanGaps: false
	    }]
	};

	var barChartProfitData = {
	    labels: ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31"],
	    datasets: [{
			label: "Profit",
			fill: true,
			lineTension: 0,
			backgroundColor: '#00AAFF',
			data: [50],
			spanGaps: false
	    }, {
	    	label: "Profit",
	        fill: true,
	        backgroundColor: '#F8E81C',
	        data: [40],
	        spanGaps: false
	    }, {
	    	label: "Profit",
	        fill: true,
	        lineTension: 0,
	        backgroundColor: '#E3B950',
	        data: [25],
	        spanGaps: false
	    }
	    ]
	};

	var lineChartNewslettersData = {
	    labels: ["January 1", "January 5", "January 10", "January 15", "January 20", "January 25"],
	    datasets: [{
			label: "Sold",
			fill: true,
			lineTension: .5,
			backgroundColor: 'rgba(163,136,227, 0.1)',
			borderWidth: 2,
			borderColor: "#886CE6",
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			//pointStyle: 'cross',
			pointRadius: 0,
			pointBorderColor: "#fff",
			pointBackgroundColor: "#2a2f37",
			pointBorderWidth: 2,
			pointHoverRadius: 6,
			pointHoverBackgroundColor: "#FC2055",
			pointHoverBorderColor: "#fff",
			pointHoverBorderWidth: 2,
			//pointRadius: 4,
			//pointHitRadius: 5,
			data: [10, 50, 20, 32, 8, 20],
			spanGaps: false
	    }]
	};

	var lineChartSubscribersData = {
	    labels: ["January 1", "January 5", "January 10", "January 15", "January 20", "January 25"],
	    datasets: [{
			label: "Sold",
			fill: true,
			lineTension: .5,
			backgroundColor: 'rgba(0,170,255, 0.1)',
			borderWidth: 2,
			borderColor: "#00AAFF",
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			//pointStyle: 'cross',
			pointRadius: 0,
			pointBorderColor: "#fff",
			pointBackgroundColor: "#2a2f37",
			pointBorderWidth: 2,
			pointHoverRadius: 6,
			pointHoverBackgroundColor: "#FC2055",
			pointHoverBorderColor: "#fff",
			pointHoverBorderWidth: 2,
			data: [40, 30, 50, 15, 25, 10],
			spanGaps: false
	    }]
	};

	var lineChartConversionData = {
	    labels: ["January 1", "January 5", "January 10", "January 15", "January 20", "January 25"],
	    datasets: [{
			label: "Sold",
			fill: true,
			lineTension: .5,
			backgroundColor: 'rgba(27,185,52, 0.1)',
			borderWidth: 2,
			borderColor: "#1BB934",
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			//pointStyle: 'cross',
			pointRadius: 0,
			pointBorderColor: "#fff",
			pointBackgroundColor: "#2a2f37",
			pointBorderWidth: 2,
			pointHoverRadius: 6,
			pointHoverBackgroundColor: "#FC2055",
			pointHoverBorderColor: "#fff",
			pointHoverBorderWidth: 2,
			//pointRadius: 4,
			//pointHitRadius: 5,
			data: [50, 20, 40, 20, 50, 8],
			spanGaps: false
	    }]
	};

	var barChartSalesData = {
	   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	    datasets: [{
			label: "Profit",
			fill: true,
			backgroundColor: '#00AAFF',
			data: [50, 60, 80, 40,50, 60]
	    }]
	};

	var barChartCustomersData = {
	    labels: ["January 1", "January 5", "January 10", "January 15", "January 20", "January 25"],
	    datasets: [{
			label: "Sold",
			fill: true,
			lineTension: 0,
			backgroundColor: 'rgba(163,136,227, 0.1)',
			borderWidth: 2,
			borderColor: "#886CE6",
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			//pointStyle: 'cross',
			pointRadius: 0,
			pointBorderColor: "#fff",
			pointBackgroundColor: "#2a2f37",
			pointBorderWidth: 2,
			pointHoverRadius: 6,
			pointHoverBackgroundColor: "#FC2055",
			pointHoverBorderColor: "#fff",
			pointHoverBorderWidth: 2,
			//pointRadius: 4,
			//pointHitRadius: 5,
			data: [40, 32, 42, 28, 53, 34],
			spanGaps: false
	    }]
	};

	var lineChartProfitData = {
	    labels: ["January 1", "January 5", "January 10", "January 15", "January 20", "January 25"],
	    datasets: [{
			label: "Sold",
			fill: true,
			lineTension: 0,
			backgroundColor: 'rgba(163,136,227, 0.1)',
			borderWidth: 2,
			borderColor: "#886CE6",
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			//pointStyle: 'cross',
			pointRadius: 0,
			pointBorderColor: "#fff",
			pointBackgroundColor: "#2a2f37",
			pointBorderWidth: 2,
			pointHoverRadius: 6,
			pointHoverBackgroundColor: "#FC2055",
			pointHoverBorderColor: "#fff",
			pointHoverBorderWidth: 2,
			//pointRadius: 4,
			//pointHitRadius: 5,
			data: [40, 32, 42, 28, 53, 34],
			spanGaps: false
	    }]
	};

	if (chartPayout) {
		var lineChartPayout = new Chart(chartPayout, {
		    type: 'line',
		    data: lineChartPayoutData,
		    options: {
				legend: {
					display: false
				},
				scales: {
					xAxes: [{
							display: false,
							ticks: {
							fontSize: '11',
							fontColor: '#969da5'
						},
						gridLines: {
							color: 'rgba(0,0,0,0.0)',
							zeroLineColor: 'rgba(0,0,0,0.0)'
						}
					}],
					yAxes: [{
						display: false,
						ticks: {
							beginAtZero: true,
							max: 55
						}
					}]
				}
			}
		});
	}

	if (chartEarnings) {
		var lineChartEarnings = new Chart(chartEarnings, {
		    type: 'line',
		    data: lineChartEarningsData,
		    options: {
				legend: {
					display: false
				},
				scales: {
					xAxes: [{
							display: false,
							ticks: {
							fontSize: '11',
							fontColor: '#969da5'
						},
						gridLines: {
							color: 'rgba(0,0,0,0.0)',
							zeroLineColor: 'rgba(0,0,0,0.0)'
						}
					}],
					yAxes: [{
						display: false,
						ticks: {
							beginAtZero: true,
							max: 55
						}
					}]
				}
			}
		});
	}

	if(chartRevenue) {
		var lineChartRevenue = new Chart(chartRevenue, {
		    type: 'line',
		    data: lineChartRevenueData,
		    options: {
				legend: {
					display: true,
					labels: {
		                fontColor: '#7F8FA4',
		                fontFamily: '"Source Sans Pro", sans-serif',
		                boxRadius: 4,
		                usePointStyle: true
		            }
				},
				layout: {
		            padding: {
		                left: 0,
		                right: 0,
		                top: 0,
		                bottom: 0
		            }
		        },
				scales: {
					xAxes: [{
						display: true,
						ticks: {
							fontSize: '11',
							fontColor: '#969da5'
						},
						gridLines: {
							color: 'rgba(0,0,0,0.0)',
							zeroLineColor: 'rgba(0,0,0,0.0)'
						}
					}],
					yAxes: [{
						display: true,	
						gridLines: {
							color: 'rgba(223,226,229,0.45)',
							zeroLineColor: 'rgba(0,0,0,0.0)'
							//tickMarkLength:
						},
						ticks: {
							beginAtZero: true,
							max: 100,
							stepSize: 25,
							fontSize: '11',
							fontColor: '#969da5'
						}
					}]
				}
			}
		});
	}

	if (chartSubscribers) {
		var lineChartSubscribers = new Chart(chartSubscribers, {
		    type: 'line',
		    data: lineChartSubscribersData,
		    options: {
				legend: {
					display: false
				},
				scales: {
					xAxes: [{
							display: false,
							ticks: {
							fontSize: '11',
							fontColor: '#969da5'
						},
						gridLines: {
							color: 'rgba(0,0,0,0.0)',
							zeroLineColor: 'rgba(0,0,0,0.0)'
						}
					}],
					yAxes: [{
						display: false,
						ticks: {
							beginAtZero: true,
							max: 55
						}
					}]
				}
			}
		});
	}

	if (chartNewsletters) {
		var lineChartNewsletters = new Chart(chartNewsletters, {
		    type: 'line',
		    data: lineChartNewslettersData,
		    options: {
				legend: {
					display: false
				},
				scales: {
					xAxes: [{
							display: false,
							ticks: {
							fontSize: '11',
							fontColor: '#969da5'
						},
						gridLines: {
							color: 'rgba(0,0,0,0.0)',
							zeroLineColor: 'rgba(0,0,0,0.0)'
						}
					}],
					yAxes: [{
						display: false,
						ticks: {
							beginAtZero: true,
							max: 55
						}
					}]
				}
			}
		});
	}

	if (chartConversion) {
		var lineChartConversion = new Chart(chartConversion, {
		    type: 'line',
		    data: lineChartConversionData,
		    options: {
				legend: {
					display: false
				},
				scales: {
					xAxes: [{
							display: false,
							ticks: {
							fontSize: '11',
							fontColor: '#969da5'
						},
						gridLines: {
							color: 'rgba(0,0,0,0.0)',
							zeroLineColor: 'rgba(0,0,0,0.0)'
						}
					}],
					yAxes: [{
						display: false,
						ticks: {
							beginAtZero: true,
							max: 55
						}
					}]
				}
			}
		});
	}

	if(chartProfitQ1) {
		var barChartProfit = new Chart(chartProfitQ1, {
		    type: 'bar',
		    data: barChartProfitData,
		    options: {
		    	responsive: true,
		    	maintainAspectRatio: false,
		    	barThickness: 3,
				legend: {
					display: false,
				},
				tooltips: {
					enabled: false
				},
				layout: {
		            padding: {
		                left: 0,
		                right: 0,
		                top: 0,
		                bottom: 0
		            }
		        },
				scales: {
					xAxes: [{
						display: false,
						barThickness : 3
					}],
					yAxes: [{
						display: false
					}]
				}
			}
		});
	}

	if(chartProfitQ2) {
		var barChartProfit = new Chart(chartProfitQ2, {
		    type: 'bar',
		    data: barChartProfitData,
		    options: {
		    	responsive: true,
		    	maintainAspectRatio: false,
				legend: {
					display: false,
				},
				tooltips: {
					enabled: false
				},
				layout: {
		            padding: {
		                left: 0,
		                right: 0,
		                top: 0,
		                bottom: 0
		            }
		        },
				scales: {
					xAxes: [{
						display: false,
						barThickness : 3
					}],
					yAxes: [{
						display: false
					}]
				}
			}
		});
	}

	if(chartProfitQ3) {
		var barChartProfit = new Chart(chartProfitQ3, {
		    type: 'bar',
		    data: barChartProfitData,
		    options: {
		    	responsive: true,
		    	maintainAspectRatio: false,
				legend: {
					display: false,
				},
				tooltips: {
					enabled: false
				},
				layout: {
		            padding: {
		                left: 0,
		                right: 0,
		                top: 0,
		                bottom: 0
		            }
		        },
				scales: {
					xAxes: [{
						display: false,
						barThickness : 3
					}],
					yAxes: [{
						display: false
					}]
				}
			}
		});
	}

	if(chartProfitQ4) {
		var barChartProfit = new Chart(chartProfitQ4, {
		    type: 'bar',
		    data: barChartProfitData,
		    options: {
		    	responsive: true,
		    	maintainAspectRatio: false,
				legend: {
					display: false,
				},
				tooltips: {
					enabled: false
				},
				layout: {
		            padding: {
		                left: 0,
		                right: 0,
		                top: 0,
		                bottom: 0
		            }
		        },
				scales: {
					xAxes: [{
						display: false,
						barThickness : 3
					}],
					yAxes: [{
						display: false
					}]
				}
			}
		});
	}

	if(chartProfitQ5) {
		var barChartProfit = new Chart(chartProfitQ5, {
		    type: 'bar',
		    data: barChartProfitData,
		    options: {
		    	responsive: true,
		    	maintainAspectRatio: false,
				legend: {
					display: false,
				},
				tooltips: {
					enabled: false
				},
				layout: {
		            padding: {
		                left: 0,
		                right: 0,
		                top: 0,
		                bottom: 0
		            }
		        },
				scales: {
					xAxes: [{
						display: false,
						barThickness : 3
					}],
					yAxes: [{
						display: false
					}]
				}
			}
		});
	}

	if(chartProfitQ6) {
		var barChartProfit = new Chart(chartProfitQ6, {
		    type: 'bar',
		    data: barChartProfitData,
		    options: {
		    	responsive: true,
		    	maintainAspectRatio: false,
				legend: {
					display: false,
				},
				tooltips: {
					enabled: false
				},
				layout: {
		            padding: {
		                left: 0,
		                right: 0,
		                top: 0,
		                bottom: 0
		            }
		        },
				scales: {
					xAxes: [{
						display: false,
						barThickness : 3
					}],
					yAxes: [{
						display: false
					}]
				}
			}
		});
	}

	if(chartSummary1) {
		var pieChartSummary = new Chart(chartSummary1, {
			type: 'doughnut',
		    data: {
			    datasets: [{
			        data: [20, 10],
			        backgroundColor: ['#1991EB', '#E2E7EE']
			    }],
			    // These labels appear in the legend and in the tooltips when hovering different arcs
			    labels: [
			        'Red',
			        'Yellow',
			        'Blue'
			    ]
			},
			options: {
				cutoutPercentage: 70,
		    	responsive: false,
		    	maintainAspectRatio: false,
				legend: {
					display: false,
				},
				tooltips: {
					enabled: false
				}
			}
		});
	}

	if(chartSummary2) {
		var pieChartSummary = new Chart(chartSummary2, {
			type: 'doughnut',
		    data: {
			    datasets: [{
			        data: [50, 10],
			        backgroundColor: ['#FDC018', '#E2E7EE']
			    }],
			    // These labels appear in the legend and in the tooltips when hovering different arcs
			    labels: [
			        'Red',
			        'Yellow',
			        'Blue'
			    ]
			},
			options: {
				cutoutPercentage: 70,
		    	responsive: false,
		    	maintainAspectRatio: false,
				legend: {
					display: false,
				},
				tooltips: {
					enabled: false
				}
			}
		});
	}

	if(chartSummary3) {
		var pieChartSummary = new Chart(chartSummary3, {
			type: 'doughnut',
		    data: {
			    datasets: [{
			        data: [5, 10],
			        backgroundColor: ['#8261E6', '#E2E7EE']
			    }],
			    // These labels appear in the legend and in the tooltips when hovering different arcs
			    labels: [
			        'Red',
			        'Yellow',
			        'Blue'
			    ]
			},
			options: {
				cutoutPercentage: 70,
		    	responsive: false,
		    	maintainAspectRatio: false,
				legend: {
					display: false,
				},
				tooltips: {
					enabled: false
				}
			}
		});
	}

	if(chartSales) {
		var barChartSales = new Chart(chartSales, {
		    type: 'bar',
		    data: barChartSalesData,
		    options: {
		    	responsive: false,
		    	maintainAspectRatio: false
			}
		});
	}

	if(chartCustomers) {
		var doChartCustomers = new Chart(chartCustomers, {
			type: 'doughnut',
		    data: {
			    datasets: [{
			        data: [20, 10],
			        backgroundColor: ['#1991EB', '#E2E7EE']
			    }],
			    // These labels appear in the legend and in the tooltips when hovering different arcs
			    labels: [
			        'Red',
			        'Yellow',
			        'Blue'
			    ]
			},
			options: {
				cutoutPercentage: 70,
		    	responsive: false,
		    	maintainAspectRatio: false,
				legend: {
					display: false,
				},
				tooltips: {
					enabled: false
				}
			}
		});
	}

	if (chartProfit) {
		var lineChartProfit = new Chart(chartProfit, {
		    type: 'line',
		    data: lineChartProfitData,
		    options: {
				legend: {
					display: false
				},
				scales: {
					xAxes: [{
							display: false,
							ticks: {
							fontSize: '11',
							fontColor: '#969da5'
						},
						gridLines: {
							color: 'rgba(0,0,0,0.0)',
							zeroLineColor: 'rgba(0,0,0,0.0)'
						}
					}],
					yAxes: [{
						display: false,
						ticks: {
							beginAtZero: true,
							max: 55
						}
					}]
				}
			}
		});
	}
});
