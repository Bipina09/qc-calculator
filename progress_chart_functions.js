// =============================================
// PROGRESS CHART & ANALYSIS FUNCTIONS
// =============================================

let progressChartInstances = {
    trend: null,
    improvements: null,
    activity: null,
    weekly: null,
    faculty: null
};

// Main function to generate progress charts
async function generateProgressChart() {
    const evaluations = await loadFromSyncServer();
    
    if (evaluations.length === 0) {
        alert('📊 No evaluations found. Please save some evaluations first to generate progress charts.');
        return;
    }
    
    // Populate faculty dropdown
    populateFacultyDropdown(evaluations);
    
    // Apply filters and generate charts
    applyProgressFilters();
}

// Populate faculty/subject dropdown
function populateFacultyDropdown(evaluations) {
    const facultySelect = document.getElementById('progressFaculty');
    const currentValue = facultySelect.value;
    
    // Get unique faculty names
    const faculties = [...new Set(evaluations
        .map(e => e.basicInfo?.facultyName || '')
        .filter(f => f))];
    
    // Keep the currently selected option and add new ones
    const existingOptions = Array.from(facultySelect.options).map(o => o.value);
    
    faculties.forEach(faculty => {
        if (!existingOptions.includes(faculty)) {
            const option = document.createElement('option');
            option.value = faculty;
            option.textContent = faculty;
            facultySelect.appendChild(option);
        }
    });
}

// Apply filters to progress charts
function applyProgressFilters() {
    const dateFrom = document.getElementById('progressDateFrom').value;
    const dateTo = document.getElementById('progressDateTo').value;
    const qcType = document.getElementById('progressQCType').value;
    const faculty = document.getElementById('progressFaculty').value;
    
    generateProgressCharts(dateFrom, dateTo, qcType, faculty);
}

// Reset all filters
function resetProgressFilters() {
    document.getElementById('progressDateFrom').value = '';
    document.getElementById('progressDateTo').value = '';
    document.getElementById('progressQCType').value = '';
    document.getElementById('progressFaculty').value = '';
    
    // Generate charts with no filters
    generateProgressCharts('', '', '', '');
}

// Generate all progress charts with applied filters
async function generateProgressCharts(dateFrom = '', dateTo = '', qcType = '', faculty = '') {
    const evaluations = await loadFromSyncServer();
    let filtered = [...evaluations];
    
    // Apply filters
    if (dateFrom) {
        const from = new Date(dateFrom);
        filtered = filtered.filter(e => new Date(e.basicInfo.date) >= from);
    }
    
    if (dateTo) {
        const to = new Date(dateTo);
        filtered = filtered.filter(e => new Date(e.basicInfo.date) <= to);
    }
    
    if (qcType) {
        filtered = filtered.filter(e => e.basicInfo.qcType === qcType);
    }
    
    if (faculty) {
        filtered = filtered.filter(e => e.basicInfo.facultyName === faculty);
    }
    
    // Sort by date
    filtered.sort((a, b) => new Date(a.basicInfo.date) - new Date(b.basicInfo.date));
    
    if (filtered.length === 0) {
        alert('⚠️ No evaluations match your selected filters.');
        return;
    }
    
    // Update statistics
    updateProgressStats(filtered);
    
    // Create all charts
    createProgressTrendChart(filtered);
    createImprovementAreasChart(filtered);
    createActivityTypeChart(filtered);
    createWeeklyProgressChart(filtered);
    createFacultyComparisonChart(filtered);
    
    // Generate insights
    generateProgressInsights(filtered);
    generateImprovementDetails(filtered);
}

// Update progress statistics
function updateProgressStats(evaluations) {
    const percentages = evaluations.map(e => calculateEvaluationPercentage(e));
    
    const avgScore = percentages.length > 0 
        ? (percentages.reduce((a, b) => a + b, 0) / percentages.length).toFixed(1)
        : 0;
    
    const bestScore = percentages.length > 0 ? Math.max(...percentages).toFixed(1) : 0;
    const lowestScore = percentages.length > 0 ? Math.min(...percentages).toFixed(1) : 0;
    
    document.getElementById('progressTotalEvals').textContent = evaluations.length;
    document.getElementById('progressAverage').textContent = avgScore + '%';
    document.getElementById('progressBest').textContent = bestScore + '%';
    document.getElementById('progressLowest').textContent = lowestScore + '%';
}

// Create performance trend chart (Line chart over time)
function createProgressTrendChart(evaluations) {
    const canvas = document.getElementById('progressTrendChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (progressChartInstances.trend) {
        progressChartInstances.trend.destroy();
    }
    
    // Prepare data
    const labels = evaluations.map(e => new Date(e.basicInfo.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: '2-digit'
    }));
    
    const data = evaluations.map(e => calculateEvaluationPercentage(e));
    
    // Calculate trend line
    const avgScore = data.length > 0 ? (data.reduce((a, b) => a + b, 0) / data.length) : 0;
    const trendLine = data.map(() => avgScore);
    
    progressChartInstances.trend = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Performance Score (%)',
                    data: data,
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointBackgroundColor: '#667eea',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                },
                {
                    label: 'Average Score',
                    data: trendLine,
                    borderColor: '#f6ad55',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0,
                    pointRadius: 0,
                    pointHoverRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: { size: 14 },
                    bodyFont: { size: 13 },
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    title: {
                        display: true,
                        text: 'Performance Score (%)'
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 0
                    }
                }
            }
        }
    });
}

// Create improvement areas chart (showing which criteria need work)
function createImprovementAreasChart(evaluations) {
    const canvas = document.getElementById('improvementAreasChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (progressChartInstances.improvements) {
        progressChartInstances.improvements.destroy();
    }
    
    // Calculate average score for each criteria across all evaluations
    const criteriaScores = {};
    
    evaluations.forEach(eval => {
        const criteria = getCriteriaByType(eval.basicInfo.qcType);
        criteria.forEach(criterion => {
            const key = criterion.title;
            const rating = eval.ratings[criterion.id] || 0;
            
            if (!criteriaScores[key]) {
                criteriaScores[key] = [];
            }
            criteriaScores[key].push(rating);
        });
    });
    
    // Calculate averages and identify areas needing improvement
    const improvementData = Object.keys(criteriaScores)
        .map(key => ({
            title: key.length > 25 ? key.substring(0, 22) + '...' : key,
            fullTitle: key,
            avgScore: criteriaScores[key].reduce((a, b) => a + b, 0) / criteriaScores[key].length,
            count: criteriaScores[key].length
        }))
        .sort((a, b) => a.avgScore - b.avgScore);
    
    const labels = improvementData.map(d => d.title);
    const scores = improvementData.map(d => d.avgScore);
    
    // Color based on score
    const colors = scores.map(score => {
        if (score >= 4) return 'rgba(56, 161, 105, 0.8)';
        if (score >= 3) return 'rgba(49, 130, 206, 0.8)';
        if (score >= 2) return 'rgba(214, 158, 46, 0.8)';
        return 'rgba(229, 62, 62, 0.8)';
    });
    
    progressChartInstances.improvements = new Chart(ctx, {
        type: 'barh',
        data: {
            labels: labels,
            datasets: [{
                label: 'Average Score (out of 5)',
                data: scores,
                backgroundColor: colors,
                borderColor: colors.map(c => c.replace('0.8', '1')),
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const idx = context.dataIndex;
                            return `Score: ${context.parsed.x.toFixed(2)}/5 • Evals: ${improvementData[idx].count}`;
                        },
                        title: function(context) {
                            return improvementData[context[0].dataIndex].fullTitle;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 5,
                    ticks: {
                        callback: function(value) {
                            return value + '/5';
                        }
                    }
                }
            }
        }
    });
}

// Create activity type performance chart
function createActivityTypeChart(evaluations) {
    const canvas = document.getElementById('activityTypeChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (progressChartInstances.activity) {
        progressChartInstances.activity.destroy();
    }
    
    // Group by activity type and calculate averages
    const activityData = {};
    
    evaluations.forEach(eval => {
        const activity = eval.basicInfo.activityType;
        const score = calculateEvaluationPercentage(eval);
        
        if (!activityData[activity]) {
            activityData[activity] = [];
        }
        activityData[activity].push(score);
    });
    
    const labels = Object.keys(activityData).map(a => getActivityDisplayName(a));
    const data = Object.keys(activityData).map(a => {
        const scores = activityData[a];
        return (scores.reduce((sum, s) => sum + s, 0) / scores.length).toFixed(1);
    });
    
    const colors = ['#667eea', '#48bb78', '#ed8936', '#e53e3e', '#38a169', '#3182ce', '#805ad5', '#d69e2e', '#2d3748', '#718096'];
    
    progressChartInstances.activity = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Average Performance (%)',
                data: data,
                backgroundColor: colors.slice(0, labels.length),
                borderColor: colors.slice(0, labels.length).map(c => c.replace('0.8', '1')),
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'x',
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 0
                    }
                }
            }
        }
    });
}

// Create week-by-week progress chart
function createWeeklyProgressChart(evaluations) {
    const canvas = document.getElementById('weeklyProgressChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (progressChartInstances.weekly) {
        progressChartInstances.weekly.destroy();
    }
    
    // Group by week
    const weekData = {};
    
    evaluations.forEach(eval => {
        const week = eval.basicInfo.courseWeek || 'Unknown';
        const score = calculateEvaluationPercentage(eval);
        
        if (!weekData[week]) {
            weekData[week] = [];
        }
        weekData[week].push(score);
    });
    
    // Sort weeks numerically
    const sortedWeeks = Object.keys(weekData)
        .filter(w => w !== 'Unknown')
        .map(w => parseInt(w))
        .sort((a, b) => a - b)
        .map(w => w.toString());
    
    if (weekData['Unknown']) {
        sortedWeeks.push('Unknown');
    }
    
    const labels = sortedWeeks.map(w => `Week ${w}`);
    const data = sortedWeeks.map(w => {
        const scores = weekData[w];
        return (scores.reduce((sum, s) => sum + s, 0) / scores.length).toFixed(1);
    });
    
    progressChartInstances.weekly = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Average Performance (%)',
                data: data,
                backgroundColor: 'rgba(102, 126, 234, 0.7)',
                borderColor: '#667eea',
                borderWidth: 2,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// Create faculty/subject comparison chart
function createFacultyComparisonChart(evaluations) {
    const canvas = document.getElementById('facultyComparisonChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (progressChartInstances.faculty) {
        progressChartInstances.faculty.destroy();
    }
    
    // Group by faculty and subject
    const facultyData = {};
    
    evaluations.forEach(eval => {
        const key = `${eval.basicInfo.facultyName} (${eval.basicInfo.subject || 'N/A'})`;
        const score = calculateEvaluationPercentage(eval);
        
        if (!facultyData[key]) {
            facultyData[key] = [];
        }
        facultyData[key].push(score);
    });
    
    const labels = Object.keys(facultyData).map(k => k.length > 30 ? k.substring(0, 27) + '...' : k);
    const data = Object.keys(facultyData).map(k => {
        const scores = facultyData[k];
        return (scores.reduce((sum, s) => sum + s, 0) / scores.length).toFixed(1);
    });
    
    // Sort by score descending
    const combined = labels.map((l, i) => ({label: l, data: data[i]}))
        .sort((a, b) => b.data - a.data);
    
    const sortedLabels = combined.map(c => c.label);
    const sortedData = combined.map(c => c.data);
    
    const colors = sortedData.map(d => {
        if (d >= 85) return '#38a169';
        if (d >= 75) return '#3182ce';
        if (d >= 65) return '#d69e2e';
        return '#e53e3e';
    });
    
    progressChartInstances.faculty = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedLabels,
            datasets: [{
                label: 'Average Performance (%)',
                data: sortedData,
                backgroundColor: colors,
                borderColor: colors.map(c => c.replace('0.7', '1')),
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 0
                    }
                }
            }
        }
    });
}

// Generate insights and recommendations
async function generateProgressInsights(evaluations) {
    const container = document.getElementById('progressInsights');
    const percentages = evaluations.map(e => calculateEvaluationPercentage(e));
    
    const avgScore = percentages.length > 0 
        ? (percentages.reduce((a, b) => a + b, 0) / percentages.length)
        : 0;
    
    const bestScore = Math.max(...percentages);
    const lowestScore = Math.min(...percentages);
    const trend = calculateTrend(percentages);
    
    let html = '<div class="insights-content">';
    
    // Score interpretation
    if (avgScore >= 85) {
        html += `<div class="insight-item">
            <i class="fas fa-star"></i>
            <span><strong>Excellent Performance:</strong> Average score of ${avgScore.toFixed(1)}% indicates strong QC standards across evaluations.</span>
        </div>`;
    } else if (avgScore >= 75) {
        html += `<div class="insight-item">
            <i class="fas fa-thumbs-up"></i>
            <span><strong>Good Performance:</strong> Average score of ${avgScore.toFixed(1)}% shows satisfactory QC execution with room for improvement.</span>
        </div>`;
    } else if (avgScore >= 60) {
        html += `<div class="insight-item warning">
            <i class="fas fa-exclamation-circle"></i>
            <span><strong>Needs Attention:</strong> Average score of ${avgScore.toFixed(1)}% indicates areas requiring focus and improvement.</span>
        </div>`;
    } else {
        html += `<div class="insight-item critical">
            <i class="fas fa-times-circle"></i>
            <span><strong>Critical Issues:</strong> Average score of ${avgScore.toFixed(1)}% requires urgent action and process improvement.</span>
        </div>`;
    }
    
    // Trend analysis
    if (trend > 0) {
        html += `<div class="insight-item">
            <i class="fas fa-arrow-up"></i>
            <span><strong>Positive Trend:</strong> Performance is improving over time (${trend > 0 ? '+' : ''}${trend.toFixed(1)}% trend).</span>
        </div>`;
    } else if (trend < 0) {
        html += `<div class="insight-item warning">
            <i class="fas fa-arrow-down"></i>
            <span><strong>Declining Performance:</strong> Performance is decreasing over time (${trend.toFixed(1)}% trend). Investigate and address issues.</span>
        </div>`;
    } else {
        html += `<div class="insight-item">
            <i class="fas fa-minus"></i>
            <span><strong>Stable Performance:</strong> Performance remains consistent across evaluations.</span>
        </div>`;
    }
    
    // Performance spread
    const spread = bestScore - lowestScore;
    if (spread > 30) {
        html += `<div class="insight-item warning">
            <i class="fas fa-random"></i>
            <span><strong>High Performance Variability:</strong> Large gap (${spread.toFixed(1)}%) between best (${bestScore.toFixed(1)}%) and lowest (${lowestScore.toFixed(1)}%) scores indicates inconsistency.</span>
        </div>`;
    } else {
        html += `<div class="insight-item">
            <i class="fas fa-check-circle"></i>
            <span><strong>Consistent Performance:</strong> Narrow gap (${spread.toFixed(1)}%) between scores indicates stable QC standards.</span>
        </div>`;
    }
    
    // Find improvement areas
    const improvementAreas = await findTopImprovementAreas(evaluations);
    if (improvementAreas.length > 0) {
        html += `<div class="insight-item critical">
            <i class="fas fa-exclamation-triangle"></i>
            <span><strong>Top Priority Areas:</strong> ${improvementAreas.slice(0, 2).join(', ')} need immediate attention and targeted improvement.</span>
        </div>`;
    }
    
    html += '</div>';
    container.innerHTML = html;
}

// Calculate trend (linear regression slope)
function calculateTrend(values) {
    if (values.length < 2) return 0;
    
    const n = values.length;
    const sumX = (n * (n - 1)) / 2;
    const sumY = values.reduce((a, b) => a + b, 0);
    const sumXY = values.reduce((sum, v, i) => sum + (i * v), 0);
    const sumX2 = (n * (n - 1) * (2 * n - 1)) / 6;
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    return slope;
}

// Find top improvement areas
async function findTopImprovementAreas(evaluations) {
    const criteriaScores = {};
    
    evaluations.forEach(eval => {
        const criteria = getCriteriaByType(eval.basicInfo.qcType);
        criteria.forEach(criterion => {
            const key = criterion.title;
            const rating = eval.ratings[criterion.id] || 0;
            
            if (!criteriaScores[key]) {
                criteriaScores[key] = [];
            }
            criteriaScores[key].push(rating);
        });
    });
    
    // Find criteria with average score < 3.5
    return Object.keys(criteriaScores)
        .map(key => ({
            title: key,
            avg: criteriaScores[key].reduce((a, b) => a + b, 0) / criteriaScores[key].length
        }))
        .filter(item => item.avg < 3.5)
        .sort((a, b) => a.avg - b.avg)
        .slice(0, 5)
        .map(item => item.title);
}

// Generate detailed improvement list
async function generateImprovementDetails(evaluations) {
    const container = document.getElementById('improvementDetailsList');
    const criteriaScores = {};
    
    evaluations.forEach(eval => {
        const criteria = getCriteriaByType(eval.basicInfo.qcType);
        criteria.forEach(criterion => {
            const key = criterion.title;
            const rating = eval.ratings[criterion.id] || 0;
            
            if (!criteriaScores[key]) {
                criteriaScores[key] = [];
            }
            criteriaScores[key].push(rating);
        });
    });
    
    // Calculate averages and sort
    const improvementList = Object.keys(criteriaScores)
        .map((key, idx) => ({
            rank: idx + 1,
            title: key,
            avgScore: criteriaScores[key].reduce((a, b) => a + b, 0) / criteriaScores[key].length,
            count: criteriaScores[key].length
        }))
        .sort((a, b) => a.avgScore - b.avgScore);
    
    if (improvementList.length === 0) {
        container.innerHTML = '<p class="details-placeholder">No improvement data available</p>';
        return;
    }
    
    let html = '<div class="improvement-list">';
    
    improvementList.forEach((item, i) => {
        if (i >= 10) return; // Show top 10
        
        const percent = (item.avgScore / 5) * 100;
        const needsImprovement = item.avgScore < 3.5;
        
        html += `
            <div class="improvement-item">
                <div class="improvement-rank">${item.rank}</div>
                <div class="improvement-item-info">
                    <h4>${item.title}</h4>
                    <p>Average Score: ${item.avgScore.toFixed(2)}/5 across ${item.count} evaluations</p>
                </div>
                <div style="width: 100%; max-width: 150px;">
                    <div style="height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
                        <div style="height: 100%; width: ${percent}%; background: ${needsImprovement ? '#e53e3e' : '#38a169'}; transition: width 0.3s ease;"></div>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Export progress report to Excel
async function exportProgressReport() {
    if (typeof XLSX === 'undefined') {
        alert('Excel export library not loaded. Please refresh and try again.');
        return;
    }
    
    const evaluations = await loadFromSyncServer();
    if (evaluations.length === 0) {
        alert('No evaluations to export.');
        return;
    }
    
    // Create worksheets
    const wb = XLSX.utils.book_new();
    
    // Summary sheet
    const summaryData = [];
    summaryData.push(['QC Progress Report', new Date().toLocaleDateString()]);
    summaryData.push([]);
    summaryData.push(['Total Evaluations', evaluations.length]);
    summaryData.push(['Average Score', (evaluations.map(e => calculateEvaluationPercentage(e)).reduce((a, b) => a + b, 0) / evaluations.length).toFixed(1) + '%']);
    
    const summarySheet = XLSX.utils.aoa_to_sheet(summaryData);
    XLSX.utils.book_append_sheet(wb, summarySheet, 'Summary');
    
    // Detailed evaluations sheet
    const detailedData = [['Date', 'Faculty', 'Subject', 'QC Type', 'Activity', 'Score (%)', 'Performance']];
    evaluations.forEach(e => {
        const score = calculateEvaluationPercentage(e).toFixed(1);
        const performance = calculatePerformance(score);
        detailedData.push([
            e.basicInfo.date,
            e.basicInfo.facultyName,
            e.basicInfo.subject,
            getQCTypeDisplayName(e.basicInfo.qcType),
            getActivityDisplayName(e.basicInfo.activityType),
            score,
            performance
        ]);
    });
    
    const detailedSheet = XLSX.utils.aoa_to_sheet(detailedData);
    XLSX.utils.book_append_sheet(wb, detailedSheet, 'Evaluations');
    
    // Save
    XLSX.writeFile(wb, `QC_Progress_Report_${new Date().toISOString().split('T')[0]}.xlsx`);
    alert('✅ Progress report exported successfully!');
}

// Export progress report to PDF
async function exportProgressPDF() {
    if (typeof jspdf === 'undefined') {
        alert('PDF export library not loaded. Please refresh and try again.');
        return;
    }
    
    const evaluations = await loadFromSyncServer();
    if (evaluations.length === 0) {
        alert('No evaluations to export.');
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.text('QC Progress Report', 20, 20);
    
    // Date
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 30);
    
    // Statistics
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Summary Statistics', 20, 45);
    
    const percentages = evaluations.map(e => calculateEvaluationPercentage(e));
    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');
    
    doc.text(`Total Evaluations: ${evaluations.length}`, 25, 55);
    doc.text(`Average Score: ${(percentages.reduce((a, b) => a + b, 0) / percentages.length).toFixed(1)}%`, 25, 62);
    doc.text(`Best Score: ${Math.max(...percentages).toFixed(1)}%`, 25, 69);
    doc.text(`Lowest Score: ${Math.min(...percentages).toFixed(1)}%`, 25, 76);
    
    // Add PDF content
    doc.save(`QC_Progress_Report_${new Date().toISOString().split('T')[0]}.pdf`);
    alert('✅ Progress report exported as PDF successfully!');
}
