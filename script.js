// Enhanced QC Calculator JavaScript

// Student QC Evaluation Criteria
const studentQCCriteria = [
    {
        id: 1,
        title: "Attendance and Punctuality",
        description: "Student's regular attendance and arriving on time for classes",
        weight: 1
    },
    {
        id: 2,
        title: "Active Participation",
        description: "Student's engagement in discussions, asking questions, and contributing to class activities",
        weight: 1.2
    },
    {
        id: 3,
        title: "Understanding of Concepts",
        description: "Student's grasp of lesson content and ability to apply knowledge",
        weight: 1.3
    },
    {
        id: 4,
        title: "Assignment Submission",
        description: "Timely submission of assignments and quality of work submitted",
        weight: 1.1
    },
    {
        id: 5,
        title: "Classroom Behavior",
        description: "Student's discipline, respect for others, and adherence to classroom rules",
        weight: 1
    },
    {
        id: 6,
        title: "Initiative and Curiosity",
        description: "Student's willingness to learn, explore beyond curriculum, and seek help when needed",
        weight: 1.2
    },
    {
        id: 7,
        title: "Collaborative Skills",
        description: "Student's ability to work effectively in group activities and team projects",
        weight: 1.1
    },
    {
        id: 8,
        title: "Response to Feedback",
        description: "How well the student receives and acts upon constructive feedback",
        weight: 1.1
    },
    {
        id: 9,
        title: "Assessment & Test Performance",
        description: "Student's performance in periodic tests, quizzes, mock exams, and formal evaluations",
        weight: 1.2
    },
    {
        id: 10,
        title: "Practical & Lab Skills",
        description: "Student's hands-on abilities, practical application of concepts, and performance in lab sessions",
        weight: 1.1
    }
];

// Instructor QC Evaluation Criteria
const instructorQCCriteria = [
    {
        id: 1,
        title: "Preparation and Punctuality",
        description: "Faculty well prepared for lectures and arriving on time to maintain a smooth classroom flow",
        weight: 1
    },
    {
        id: 2,
        title: "Content Delivery",
        description: "Presenting lesson material clearly, accurately, and in an organized way that students can understand",
        weight: 1.2
    },
    {
        id: 3,
        title: "Student Engagement",
        description: "Using methods that actively involve students in learning and maintain their interest throughout the lesson",
        weight: 1.2
    },
    {
        id: 4,
        title: "Classroom Management",
        description: "Maintaining discipline, order, and a positive learning environment",
        weight: 1.1
    },
    {
        id: 5,
        title: "Use of Teaching Aids/Tools",
        description: "Effectively incorporating resources like presentations, videos, charts, or technology to support learning",
        weight: 1
    },
    {
        id: 6,
        title: "Encourages Thinking",
        description: "Promoting critical thinking, creativity, and problem solving skills among students",
        weight: 1.3
    },
    {
        id: 7,
        title: "Feedback Mechanism",
        description: "Providing timely, constructive feedback to guide student improvement and understanding",
        weight: 1.1
    },
    {
        id: 8,
        title: "Student Attentiveness and Responsiveness",
        description: "Observing and ensuring that students are actively participating, attentive, and responsive during class",
        weight: 1
    },
    {
        id: 9,
        title: "Student Disciplinary",
        description: "Applying fair and consistent discipline strategies to address and correct student misbehavior",
        weight: 1
    },
    {
        id: 10,
        title: "Professionalism & Ethics",
        description: "Demonstrating respectful, fair, and ethical behavior consistently with students",
        weight: 1.2
    },
    {
        id: 11,
        title: "Organization and Execution of Exposure Visits",
        description: "Planning and conducting educational visits or practical sessions effectively",
        weight: 1
    },
    {
        id: 12,
        title: "Mentoring & Individual Support",
        description: "Providing one-on-one guidance, academic counseling, and personalized support to students who need help",
        weight: 1.2
    },
    {
        id: 13,
        title: "Assessment & Evaluation Quality",
        description: "Designing fair assessments, timely grading, and providing meaningful evaluation feedback to students",
        weight: 1.1
    }
];

// Whole Class QC Evaluation Criteria
const wholeClassQCCriteria = [
    {
        id: 1,
        title: "Overall Class Engagement",
        description: "General level of participation and interest shown by the entire class",
        weight: 1.2
    },
    {
        id: 2,
        title: "Learning Environment",
        description: "Quality of the classroom atmosphere conducive to learning for all students",
        weight: 1.3
    },
    {
        id: 3,
        title: "Class Discipline",
        description: "Overall behavior management and adherence to classroom rules by all students",
        weight: 1.1
    },
    {
        id: 4,
        title: "Collaborative Learning",
        description: "How well students work together and support each other's learning",
        weight: 1.2
    },
    {
        id: 5,
        title: "Understanding Level",
        description: "General comprehension level of the class as a whole regarding the subject matter",
        weight: 1.3
    },
    {
        id: 6,
        title: "Class Participation",
        description: "Overall involvement of students in discussions, questions, and class activities",
        weight: 1.2
    },
    {
        id: 7,
        title: "Peer Interaction",
        description: "Quality of student-to-student interactions and mutual respect within the class",
        weight: 1.1
    },
    {
        id: 8,
        title: "Session Effectiveness",
        description: "Overall achievement of learning objectives for the entire class during the session",
        weight: 1.4
    },
    {
        id: 9,
        title: "Technology and Resource Utilization",
        description: "How effectively the class as a whole utilizes available learning resources and technology",
        weight: 1
    },
    {
        id: 10,
        title: "Classroom Cleanliness",
        description: "Maintenance of classroom cleanliness, organization, and proper care of classroom environment by students",
        weight: 1.1
    },
    {
        id: 11,
        title: "Engaging Activity",
        description: "Quality and effectiveness of engaging activities, interactive sessions, and student participation through varied instructional methods",
        weight: 1.2
    }
];

// Resource QC Evaluation Criteria
const resourceQCCriteria = [
    {
        id: 1,
        title: "Resource Availability",
        description: "Adequate availability of required learning materials, equipment, and resources for the session",
        weight: 1.3
    },
    {
        id: 2,
        title: "Resource Quality and Condition",
        description: "Quality, functionality, and working condition of provided resources and equipment",
        weight: 1.2
    },
    {
        id: 3,
        title: "Resource Distribution Efficiency",
        description: "Timely and organized distribution of resources to students without causing delays or confusion",
        weight: 1.4
    },
    {
        id: 4,
        title: "Resource Relevance to Subject",
        description: "Appropriateness and relevance of resources to the current lesson and learning objectives",
        weight: 1.2
    },
    {
        id: 5,
        title: "Timely Resource Provision",
        description: "Resources are made available at the right time during the session without disrupting flow",
        weight: 1.3
    },
    {
        id: 6,
        title: "Resource Management and Organization",
        description: "Proper organization, storage, and management of resources before, during, and after the session",
        weight: 1.2
    },
    {
        id: 7,
        title: "Impact on Learning Environment",
        description: "How resource management affects the overall classroom atmosphere and learning process",
        weight: 1.3
    },
    {
        id: 8,
        title: "Resource Maintenance and Safety",
        description: "Safety standards and maintenance of equipment and resources to prevent accidents or malfunctions",
        weight: 1.2
    },
    {
        id: 9,
        title: "Resource Utilization Tracking",
        description: "Monitoring and tracking of resource usage to identify shortages, wastage, or misuse",
        weight: 1.1
    },
    {
        id: 10,
        title: "Resource Return and Submission",
        description: "Proper collection and submission of resources back after class completion to maintain inventory and prevent loss",
        weight: 1.3
    },
    {
        id: 11,
        title: "Backup Resource Planning",
        description: "Availability of alternative resources and contingency planning for resource failures",
        weight: 1.0
    }
];

// Visit QC Evaluation Criteria
const visitQCCriteria = [
    {
        id: 1,
        title: "Visit Planning and Coordination",
        description: "Proper planning, scheduling, and coordination of the visit with all stakeholders",
        weight: 1.2
    },
    {
        id: 2,
        title: "Educational Objectives Alignment",
        description: "Clear connection between visit objectives and curriculum learning outcomes",
        weight: 1.3
    },
    {
        id: 3,
        title: "Student Preparation and Briefing",
        description: "Adequate preparation of students about visit purpose, expectations, and safety guidelines",
        weight: 1.1
    },
    {
        id: 4,
        title: "Safety and Security Measures",
        description: "Implementation of proper safety protocols and security measures during the visit",
        weight: 1.4
    },
    {
        id: 5,
        title: "Guide/Facilitator Expertise",
        description: "Knowledge and communication skills of the visit guide or facilitator",
        weight: 1.2
    },
    {
        id: 6,
        title: "Student Engagement and Interaction",
        description: "Level of student participation, questions, and meaningful interaction during the visit",
        weight: 1.3
    },
    {
        id: 7,
        title: "Relevance and Practical Application",
        description: "Connection between visit content and real-world application of theoretical knowledge",
        weight: 1.4
    },
    {
        id: 8,
        title: "Visit Documentation and Follow-up",
        description: "Proper documentation of the visit and planned follow-up activities or assessments",
        weight: 1.1
    },
    {
        id: 9,
        title: "Time Management and Schedule Adherence",
        description: "Effective time management and adherence to planned schedule during the visit",
        weight: 1.0
    },
    {
        id: 10,
        title: "Transportation and Logistics",
        description: "Smooth transportation arrangements and overall logistical management",
        weight: 1.0
    }
];

// Showcase QC Evaluation Criteria
const showcaseQCCriteria = [
    {
        id: 1,
        title: "Content Quality and Relevance",
        description: "Quality, accuracy, and relevance of showcase content to the subject matter",
        weight: 1.3
    },
    {
        id: 2,
        title: "Presentation Skills and Delivery",
        description: "Clarity, confidence, and effectiveness of presentation delivery by students/faculty",
        weight: 1.2
    },
    {
        id: 3,
        title: "Innovation and Creativity",
        description: "Level of innovation, creativity, and original thinking demonstrated in the showcase",
        weight: 1.4
    },
    {
        id: 4,
        title: "Technical Execution and Setup",
        description: "Technical quality of setup, equipment usage, and overall execution of the showcase",
        weight: 1.1
    },
    {
        id: 5,
        title: "Audience Engagement and Interaction",
        description: "Ability to engage audience, handle questions, and facilitate meaningful interaction",
        weight: 1.3
    },
    {
        id: 6,
        title: "Organization and Structure",
        description: "Logical flow, organization, and structure of the showcase presentation",
        weight: 1.1
    },
    {
        id: 7,
        title: "Visual and Multimedia Elements",
        description: "Effective use of visual aids, multimedia, and presentation materials",
        weight: 1.2
    },
    {
        id: 8,
        title: "Time Management and Pacing",
        description: "Appropriate pacing and effective time management throughout the showcase",
        weight: 1.0
    },
    {
        id: 9,
        title: "Collaborative Teamwork",
        description: "Coordination and collaboration among team members during the showcase",
        weight: 1.2
    },
    {
        id: 10,
        title: "Learning Outcomes Achievement",
        description: "Demonstration of achieved learning outcomes and practical application of knowledge",
        weight: 1.4
    },
    {
        id: 11,
        title: "Professional Presentation Standards",
        description: "Adherence to professional standards, etiquette, and formal presentation guidelines",
        weight: 1.1
    }
];

// Current active criteria (defaults to instructor QC)
let currentCriteria = instructorQCCriteria;

// Helper function to get QC type display name
function getQCTypeDisplayName(qcType) {
    switch(qcType) {
        case 'student': return 'Student QC';
        case 'instructor': return 'Instructor QC'; 
        case 'class': return 'Whole Class QC';
        case 'resource': return 'Resource QC';
        case 'visit': return 'Visit QC';
        case 'showcase': return 'Showcase QC';
        default: return 'Unknown QC Type';
    }
}

// Helper function to get activity type display name
function getActivityDisplayName(activity) {
    switch(activity) {
        case 'regular_class': return 'Regular Class';
        case 'lab_practical': return 'Lab / Practical';
        case 'assessment': return 'Assessment / Test';
        case 'workshop': return 'Workshop / Guest Lecture';
        case 'mentoring': return 'Mentoring Session';
        case 'project_work': return 'Project Work';
        case 'orientation': return 'Orientation';
        case 'review_meeting': return 'Review Meeting';
        case 'field_visit': return 'Field Visit';
        case 'showcase': return 'Showcase';
        default: return activity || 'General';
    }
}

// Chart instance
let performanceChart = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    loadHistory();
    checkSyncStatus();
    
    // Auto-sync every 30 seconds
    setInterval(() => {
        loadHistory();
    }, 30000);
});

function checkSyncStatus() {
    // Add sync status indicator
    const header = document.querySelector('.header');
    if (header) {
        const syncStatus = document.createElement('div');
        syncStatus.id = 'syncStatus';
        syncStatus.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 5px 10px;
            background: #ed8936;
            color: white;
            border-radius: 15px;
            font-size: 0.8em;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        syncStatus.innerHTML = '<i class="fas fa-info-circle"></i> Multi-Device Sync Available';
        syncStatus.title = 'Click for sync instructions';
        syncStatus.onclick = showSyncInstructions;
        header.style.position = 'relative';
        header.appendChild(syncStatus);
    }
}

function showSyncInstructions() {
    const instructions = `
📱 MULTI-DEVICE SYNC INSTRUCTIONS:

To share evaluation history between devices:

1️⃣ ON CURRENT DEVICE:
   • Click "Export History" button
   • Download the JSON file

2️⃣ ON OTHER DEVICE:
   • Access: http://10.40.2.208:8080
   • Click "Import History" button  
   • Select the downloaded JSON file
   • Confirm import

✅ BENEFITS:
   • All evaluations sync instantly
   • No data loss between devices
   • Works across all device types
   • Secure local network sharing

🔗 NETWORK URL: http://10.40.2.208:8080

Share this URL with other devices on your network!
    `;
    
    alert(instructions);
}

// Function to change QC type
function changeQCType() {
    const qcType = document.getElementById('qcType').value;
    const criteriaTitle = document.getElementById('criteriaTitle');
    const qcTypeIndicator = document.getElementById('qcTypeIndicator');
    const qcTypeText = document.getElementById('qcTypeText');
    
    // Clear existing ratings when changing QC type
    window.ratings = {};
    
    switch(qcType) {
        case 'student':
            currentCriteria = studentQCCriteria;
            criteriaTitle.textContent = 'Student QC Evaluation Criteria';
            qcTypeText.textContent = 'Evaluating: Individual Student Performance';
            qcTypeIndicator.style.display = 'block';
            break;
        case 'instructor':
            currentCriteria = instructorQCCriteria;
            criteriaTitle.textContent = 'Instructor QC Evaluation Criteria';
            qcTypeText.textContent = 'Evaluating: Faculty Teaching Performance';
            qcTypeIndicator.style.display = 'block';
            break;
        case 'class':
            currentCriteria = wholeClassQCCriteria;
            criteriaTitle.textContent = 'Whole Class QC Evaluation Criteria';
            qcTypeText.textContent = 'Evaluating: Overall Class Performance and Dynamics';
            qcTypeIndicator.style.display = 'block';
            break;
        case 'resource':
            currentCriteria = resourceQCCriteria;
            criteriaTitle.textContent = 'Resource QC Evaluation Criteria';
            qcTypeText.textContent = 'Evaluating: Resource Management and Distribution Quality';
            qcTypeIndicator.style.display = 'block';
            break;
        case 'visit':
            currentCriteria = visitQCCriteria;
            criteriaTitle.textContent = 'Visit QC Evaluation Criteria';
            qcTypeText.textContent = 'Evaluating: Educational Visit Planning and Execution';
            qcTypeIndicator.style.display = 'block';
            break;
        case 'showcase':
            currentCriteria = showcaseQCCriteria;
            criteriaTitle.textContent = 'Showcase QC Evaluation Criteria';
            qcTypeText.textContent = 'Evaluating: Project Showcase and Presentation Quality';
            qcTypeIndicator.style.display = 'block';
            break;
        default:
            qcTypeIndicator.style.display = 'none';
            criteriaTitle.textContent = 'Evaluation Criteria';
            return;
    }
    
    // Regenerate criteria based on selected type
    generateCriteria();
    
    // Clear results
    clearResults();
}

function clearResults() {
    document.getElementById('totalScore').textContent = '0/100';
    document.getElementById('percentage').textContent = '0%';
    document.getElementById('improvementsNeeded').textContent = '-';
    document.getElementById('performance').textContent = '-';
    
    if (performanceChart) {
        performanceChart.destroy();
        performanceChart = null;
    }
}

function initializePage() {
    // Set current date and time
    const now = new Date();
    document.getElementById('date').value = now.toISOString().split('T')[0];
    document.getElementById('time').value = now.toTimeString().substr(0, 5);
    
    // Load saved data if exists
    loadSavedData();
}

function generateCriteria() {
    const container = document.getElementById('criteriaContainer');
    container.innerHTML = '';
    
    if (!currentCriteria || currentCriteria.length === 0) {
        container.innerHTML = '<p class="no-criteria">Please select a QC type to view evaluation criteria.</p>';
        return;
    }
    
    currentCriteria.forEach(criteria => {
        const criteriaDiv = document.createElement('div');
        criteriaDiv.className = 'criteria-item';
        criteriaDiv.innerHTML = `
            <div class="criteria-header">
                <div>
                    <div class="criteria-title">${criteria.id}. ${criteria.title}</div>
                    <div class="criteria-description">${criteria.description}</div>
                </div>
                <div class="rating-container">
                    <div class="rating-buttons">
                        ${[1, 2, 3, 4, 5].map(rating => `
                            <label class="radio-label ${getRatingClass(rating)}" title="${getRatingText(rating)}">
                                <input type="radio" name="rating-${criteria.id}" value="${rating}" 
                                       onchange="setRating(${criteria.id}, ${rating})">
                                <span class="radio-custom">${rating}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="remarks-container">
                <input type="text" 
                       placeholder="Remarks (required)" 
                       id="remarks-${criteria.id}"
                       class="remarks-input"
                       required
                       onblur="validateRemarks(${criteria.id})"
                       oninput="clearRemarksError(${criteria.id})">
                <div class="error-message" id="error-remarks-${criteria.id}"></div>
            </div>
        `;
        container.appendChild(criteriaDiv);
    });
}

function getRatingClass(rating) {
    const classes = ['', 'poor', 'below-average', 'average', 'good', 'excellent'];
    return classes[rating] || '';
}

function getRatingText(rating) {
    const texts = ['', 'Poor', 'Below Average', 'Average', 'Good', 'Excellent'];
    return texts[rating] || '';
}

function setRating(criteriaId, rating) {
    // Store rating
    storeRating(criteriaId, rating);
    
    // Auto-calculate if all criteria are rated
    autoCalculateIfComplete();
}

function storeRating(criteriaId, rating) {
    if (!window.ratings) {
        window.ratings = {};
    }
    window.ratings[criteriaId] = rating;
}

function getRating(criteriaId) {
    return window.ratings && window.ratings[criteriaId] ? window.ratings[criteriaId] : 0;
}

function validateRemarks(criteriaId) {
    const remarksElement = document.getElementById(`remarks-${criteriaId}`);
    const errorElement = document.getElementById(`error-remarks-${criteriaId}`);
    
    if (!remarksElement.value.trim()) {
        // Show warning instead of error for empty remarks
        errorElement.textContent = 'Remarks recommended for better evaluation';
        errorElement.style.display = 'block';
        errorElement.style.color = '#f6ad55'; // Orange warning color
        remarksElement.style.borderColor = '#f6ad55';
        return false; // Still return false but don't block calculation
    } else {
        errorElement.style.display = 'none';
        remarksElement.style.borderColor = '#48bb78'; // Green for completed
        return true;
    }
}

function clearRemarksError(criteriaId) {
    const remarksElement = document.getElementById(`remarks-${criteriaId}`);
    const errorElement = document.getElementById(`error-remarks-${criteriaId}`);
    
    if (remarksElement.value.trim()) {
        errorElement.style.display = 'none';
        remarksElement.style.borderColor = '#e2e8f0';
    }
}

function autoCalculateIfComplete() {
    const totalCriteria = currentCriteria.length;
    const ratedCriteria = Object.keys(window.ratings || {}).length;
    
    if (ratedCriteria === totalCriteria) {
        calculateResults();
    }
}

function calculateResults() {
    if (!window.ratings) {
        alert('Please rate all criteria before calculating results.');
        return;
    }
    
    if (!currentCriteria || currentCriteria.length === 0) {
        alert('Please select a QC type first.');
        return;
    }
    
    const totalCriteria = currentCriteria.length;
    const ratedCriteria = Object.keys(window.ratings).length;
    
    if (ratedCriteria !== totalCriteria) {
        alert(`Please rate all ${totalCriteria} criteria. Currently rated: ${ratedCriteria}`);
        return;
    }

    // Calculate total score with weights
    let totalScore = 0;
    let maxPossibleScore = 0;
    
    currentCriteria.forEach(criteria => {
        const rating = getRating(criteria.id);
        const weightedScore = rating * criteria.weight;
        totalScore += weightedScore;
        maxPossibleScore += 5 * criteria.weight;
    });
    
    const percentage = Math.round((totalScore / maxPossibleScore) * 100);
    const performance = calculatePerformance(percentage);
    const improvementsNeeded = calculateImprovementsNeeded();
    
    // Update display - show score out of 100
    document.getElementById('totalScore').textContent = `${percentage}/100`;
    document.getElementById('percentage').textContent = `${percentage}%`;
    document.getElementById('improvementsNeeded').textContent = improvementsNeeded;
    document.getElementById('performance').textContent = performance;
    
    // Create performance chart
    createPerformanceChart();
    
    // Auto-save results
    autoSaveResults();
}

function calculateImprovementsNeeded() {
    const lowPerformingCriteria = [];
    
    currentCriteria.forEach(criteria => {
        const rating = getRating(criteria.id);
        if (rating < 3) { // Rating below 3 needs improvement
            lowPerformingCriteria.push(criteria.title);
        }
    });
    
    if (lowPerformingCriteria.length === 0) {
        return 'None - Good Performance';
    } else if (lowPerformingCriteria.length <= 2) {
        return lowPerformingCriteria.join(', ');
    } else {
        return `${lowPerformingCriteria.slice(0, 2).join(', ')} + ${lowPerformingCriteria.length - 2} more`;
    }
}

function calculatePerformance(percentage) {
    if (percentage >= 90) return 'Outstanding';
    if (percentage >= 80) return 'Excellent';
    if (percentage >= 70) return 'Good';
    if (percentage >= 60) return 'Satisfactory';
    if (percentage >= 50) return 'Needs Improvement';
    return 'Unsatisfactory';
}

function createPerformanceChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    
    if (performanceChart) {
        performanceChart.destroy();
    }
    
    const criteriaLabels = currentCriteria.map(c => {
        const title = c.title.length > 15 ? c.title.substring(0, 15) + '...' : c.title;
        return `${c.id}. ${title}`;
    });
    const criteriaScores = currentCriteria.map(c => getRating(c.id));
    
    // Create color array based on score ranges
    const backgroundColors = criteriaScores.map(score => {
        if (score === 5) return 'rgba(56, 161, 105, 0.8)'; // Excellent - Green
        if (score === 4) return 'rgba(49, 130, 206, 0.8)'; // Good - Blue
        if (score === 3) return 'rgba(214, 158, 46, 0.8)'; // Average - Yellow
        if (score === 2) return 'rgba(221, 107, 32, 0.8)'; // Below Average - Orange
        if (score === 1) return 'rgba(229, 62, 62, 0.8)'; // Poor - Red
        return 'rgba(160, 174, 192, 0.8)'; // Default - Gray
    });
    
    performanceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: criteriaLabels,
            datasets: [{
                label: 'Performance Score',
                data: criteriaScores,
                backgroundColor: backgroundColors,
                borderColor: backgroundColors.map(color => color.replace('0.8', '1')),
                borderWidth: 1,
                borderRadius: 4,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'x',
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5,
                    ticks: {
                        stepSize: 1,
                        callback: function(value) {
                            const labels = ['', 'Poor', 'Below Avg', 'Average', 'Good', 'Excellent'];
                            return `${value} - ${labels[value] || ''}`;
                        }
                    },
                    title: {
                        display: true,
                        text: 'Score (1-5)'
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    },
                    title: {
                        display: true,
                        text: 'Evaluation Criteria'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const scoreLabels = ['', 'Poor', 'Below Average', 'Average', 'Good', 'Excellent'];
                            return `Score: ${context.parsed.y}/5 (${scoreLabels[context.parsed.y]})`;
                        },
                        title: function(context) {
                            const fullTitle = currentCriteria[context[0].dataIndex].title;
                            return `${context[0].dataIndex + 1}. ${fullTitle}`;
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Performance Score by Criteria',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });
}

function saveEvaluation() {
    if (!validateForm()) {
        alert('Please fill in all required information, complete all ratings, and provide remarks for all criteria before saving.');
        return;
    }
    
    const evaluationData = gatherEvaluationData();
    
    // Save to sync server for real-time multi-device sharing
    saveToSyncServer(evaluationData)
        .then(() => {
            alert('✅ Evaluation saved successfully! Available on all devices.');
            loadHistory();
        })
        .catch((error) => {
            // Fallback to localStorage if server fails
            console.error('Sync server save failed:', error);
            const savedEvaluations = JSON.parse(localStorage.getItem('qcEvaluations') || '[]');
            evaluationData.id = Date.now();
            evaluationData.timestamp = new Date().toISOString();
            savedEvaluations.push(evaluationData);
            localStorage.setItem('qcEvaluations', JSON.stringify(savedEvaluations));
            alert('⚠️ Evaluation saved locally (server unavailable)');
            loadHistory();
        });
    
    return evaluationData;
}

async function saveToSyncServer(evaluationData) {
    const response = await fetch('/api/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(evaluationData)
    });
    
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error ${response.status}: ${errorText}`);
    }
    
    return response.json();
}

async function loadFromSyncServer() {
    try {
        const response = await fetch('/api/evaluations');
        if (response.ok) {
            const result = await response.json();
            if (result.success) {
                console.log(`📊 Loaded ${result.count} evaluations from sync server`);
                return result.evaluations;
            }
        }
    } catch (error) {
        console.error('Failed to load from sync server:', error);
    }
    
    // Fallback to localStorage
    console.log('⚠️ Using localStorage fallback');
    return JSON.parse(localStorage.getItem('qcEvaluations') || '[]');
}

async function deleteFromSyncServer(evaluationId) {
    try {
        const response = await fetch('/api/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: evaluationId })
        });
        
        if (response.ok) {
            const result = await response.json();
            return result.success;
        }
    } catch (error) {
        console.error('Failed to delete from sync server:', error);
    }
    
    // Fallback to localStorage
    const savedEvaluations = JSON.parse(localStorage.getItem('qcEvaluations') || '[]');
    const filteredEvaluations = savedEvaluations.filter(eval => eval.id !== evaluationId);
    localStorage.setItem('qcEvaluations', JSON.stringify(filteredEvaluations));
    return true;
}

function saveAndExportEvaluation() {
    const savedData = saveEvaluation();
    if (savedData) {
        // Automatically export to Excel after saving
        setTimeout(() => {
            exportToExcel();
        }, 500); // Small delay to ensure save completes
    }
}

function gatherEvaluationData() {
    const data = {
        basicInfo: {
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            shift: document.getElementById('shift').value,
            subject: document.getElementById('subject').value,
            stream: document.getElementById('stream').value,
            mode: document.getElementById('mode').value,
            batch: document.getElementById('batch').value,
            facultyName: document.getElementById('facultyName').value,
            qcConductor: document.getElementById('qcConductor').value,
            qcType: document.getElementById('qcType').value,
            activityType: document.getElementById('activityType').value,
            courseWeek: document.getElementById('courseWeek').value
        },
        ratings: { ...window.ratings },
        remarks: {}
    };
    
    // Gather remarks
    currentCriteria.forEach(criteria => {
        const remarksElement = document.getElementById(`remarks-${criteria.id}`);
        if (remarksElement && remarksElement.value.trim()) {
            data.remarks[criteria.id] = remarksElement.value.trim();
        }
    });
    
    return data;
}

function validateForm() {
    // Check basic info
    const requiredFields = ['date', 'time', 'shift', 'subject', 'stream', 'mode', 'activityType', 'courseWeek', 'batch', 'facultyName', 'qcConductor', 'qcType'];
    for (let field of requiredFields) {
        if (!document.getElementById(field).value.trim()) {
            return false;
        }
    }
    
    // Check ratings
    if (!window.ratings || Object.keys(window.ratings).length !== currentCriteria.length) {
        return false;
    }
    
    // Check remarks (now required for saving/exporting)
    for (let criteria of currentCriteria) {
        const remarksElement = document.getElementById(`remarks-${criteria.id}`);
        const errorElement = document.getElementById(`error-remarks-${criteria.id}`);
        
        if (!remarksElement || !remarksElement.value.trim()) {
            if (errorElement) {
                errorElement.textContent = 'Remarks are required';
                errorElement.style.display = 'block';
            }
            remarksElement.focus();
            return false;
        } else {
            if (errorElement) {
                errorElement.style.display = 'none';
            }
        }
    }
    
    return true;
}

function validateForCalculation() {
    // Check basic info
    const requiredFields = ['date', 'time', 'shift', 'subject', 'stream', 'mode', 'activityType', 'courseWeek', 'batch', 'facultyName', 'qcConductor', 'qcType'];
    for (let field of requiredFields) {
        if (!document.getElementById(field).value.trim()) {
            alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`);
            document.getElementById(field).focus();
            return false;
        }
    }
    
    // Check ratings only
    if (!window.ratings || Object.keys(window.ratings).length !== currentCriteria.length) {
        alert('Please rate all criteria before calculating results.');
        return false;
    }
    
    return true;
}

function exportToPDF() {
    if (!validateForm()) {
        alert('Please complete the evaluation before exporting.');
        return;
    }
    
    calculateResults(); // Ensure results are up to date
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.text('Quality Control Evaluation Report', 20, 20);
    
    // Add basic information
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    let y = 40;
    
    const basicInfo = gatherEvaluationData().basicInfo;
    doc.text(`Date: ${basicInfo.date}`, 20, y);
    doc.text(`Time: ${basicInfo.time}`, 120, y);
    y += 10;
    doc.text(`Shift: ${basicInfo.shift}`, 20, y);
    doc.text(`Mode: ${basicInfo.mode}`, 120, y);
    y += 10;
    doc.text(`Subject: ${basicInfo.subject}`, 20, y);
    y += 10;
    doc.text(`Stream: ${basicInfo.stream}`, 20, y);
    doc.text(`Batch: ${basicInfo.batch}`, 120, y);
    y += 10;
    doc.text(`Faculty: ${basicInfo.facultyName}`, 20, y);
    y += 10;
    doc.text(`QC Conductor: ${basicInfo.qcConductor}`, 20, y);
    y += 10;
    doc.text(`QC Type: ${getQCTypeDisplayName(basicInfo.qcType)}`, 20, y);
    doc.text(`Activity: ${getActivityDisplayName(basicInfo.activityType)}`, 120, y);
    y += 10;
    doc.text(`Course Week: Week ${basicInfo.courseWeek || 'N/A'}`, 20, y);
    
    y += 20;
    
    // Add evaluation results
    doc.setFont(undefined, 'bold');
    doc.text('Evaluation Results:', 20, y);
    y += 15;
    
    doc.setFont(undefined, 'normal');
    const totalScore = document.getElementById('totalScore').textContent;
    const percentage = document.getElementById('percentage').textContent;
    const improvementsNeeded = document.getElementById('improvementsNeeded').textContent;
    const performance = document.getElementById('performance').textContent;
    
    doc.text(`Total Score: ${totalScore}`, 20, y);
    doc.text(`Percentage: ${percentage}`, 120, y);
    y += 10;
    doc.text(`Improvements Needed: ${improvementsNeeded}`, 20, y);
    doc.text(`Performance: ${performance}`, 120, y);
    
    y += 20;
    
    // Add criteria details
    doc.setFont(undefined, 'bold');
    doc.text('Detailed Evaluation:', 20, y);
    y += 15;
    
    doc.setFont(undefined, 'normal');
    currentCriteria.forEach(criteria => {
        if (y > 250) {
            doc.addPage();
            y = 20;
        }
        
        const rating = getRating(criteria.id);
        doc.text(`${criteria.id}. ${criteria.title}: ${rating}/5 (${getRatingText(rating)})`, 20, y);
        y += 8;
        
        const remarksElement = document.getElementById(`remarks-${criteria.id}`);
        if (remarksElement && remarksElement.value.trim()) {
            doc.setFont(undefined, 'italic');
            doc.text(`   Remarks: ${remarksElement.value.trim()}`, 20, y);
            doc.setFont(undefined, 'normal');
            y += 8;
        }
    });
    
    // Save the PDF
    const fileName = `QC_Report_${basicInfo.facultyName}_${basicInfo.date}.pdf`;
    doc.save(fileName);
}

function exportToExcel() {
    if (!validateForm()) {
        alert('Please complete the evaluation before exporting.');
        return;
    }
    
    // Check if XLSX library is loaded
    if (typeof XLSX === 'undefined') {
        alert('Excel export library is not loaded. Please refresh the page and try again.');
        return;
    }
    
    calculateResults(); // Ensure results are up to date
    
    const evaluationData = gatherEvaluationData();
    const basicInfo = evaluationData.basicInfo;
    
    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();
    
    // Create the data array matching the provided format
    const data = [];
    
    // Row 1: Shift header (merged across all columns)
    data.push([basicInfo.shift.toUpperCase() + ' SHIFT', '', '', '', '']);
    
    // Row 2: Empty row for spacing
    data.push(['', '', '', '', '']);
    
    // Rows 3-9: Basic Information (right aligned in the original format)
    data.push(['', '', '', 'Date:', basicInfo.date]);
    data.push(['', '', '', 'Time:', basicInfo.time]);
    data.push(['', '', '', 'Subject:', basicInfo.subject]);
    data.push(['', '', '', 'Stream:', basicInfo.stream]);
    data.push(['', '', '', 'Mode:', basicInfo.mode]);
    data.push(['', '', '', 'Batch:', basicInfo.batch]);
    data.push(['', '', '', 'Facilitator Name:', basicInfo.facultyName]);
    data.push(['', '', '', 'QC Conductor:', basicInfo.qcConductor]);
    data.push(['', '', '', 'Activity Type:', getActivityDisplayName(basicInfo.activityType)]);
    data.push(['', '', '', 'Course Week:', 'Week ' + (basicInfo.courseWeek || 'N/A')]);
    
    // Row 10: Empty row for spacing
    data.push(['', '', '', '', '']);
    
    // Row 11: Table headers
    data.push(['S.N', 'Criteria', 'Score 1 to 5\n(Rating Scale 1 = Poor, 10= Excellent)', 'Remarks', '']);
    
    // Add criteria rows
    currentCriteria.forEach((criteria, index) => {
        const rating = getRating(criteria.id);
        const remarksElement = document.getElementById(`remarks-${criteria.id}`);
        const remarks = remarksElement ? remarksElement.value.trim() : '';
        
        data.push([
            index + 1,
            criteria.title + '\n(' + criteria.description + ')',
            rating || '',
            remarks || '',
            ''
        ]);
    });
    
    // Add Total Score row
    const totalScore = document.getElementById('totalScore').textContent;
    data.push(['', 'Total Score', totalScore, '', '']);
    
    // Create worksheet
    const ws = XLSX.utils.aoa_to_sheet(data);
    
    // Set column widths
    ws['!cols'] = [
        { wch: 6 },   // S.N column
        { wch: 45 },  // Criteria column
        { wch: 20 },  // Score column
        { wch: 35 },  // Remarks column
        { wch: 5 }    // Extra spacing column
    ];
    
    // Set row heights for better readability
    ws['!rows'] = [];
    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            ws['!rows'][i] = { hpt: 30 }; // Header row height
        } else if (i >= 11) {
            ws['!rows'][i] = { hpt: 40 }; // Criteria rows height
        } else {
            ws['!rows'][i] = { hpt: 20 }; // Regular row height
        }
    }
    
    // Merge the header cell across columns A1:E1
    ws['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 4 } } // Merge A1:E1 for shift header
    ];
    
    // Apply styling
    const headerStyle = {
        font: { bold: true, color: { rgb: "FFFFFF" }, size: 14 },
        fill: { fgColor: { rgb: "92D050" } }, // Green background
        alignment: { horizontal: "center", vertical: "center" },
        border: {
            top: { style: "thin", color: { rgb: "000000" } },
            bottom: { style: "thin", color: { rgb: "000000" } },
            left: { style: "thin", color: { rgb: "000000" } },
            right: { style: "thin", color: { rgb: "000000" } }
        }
    };
    
    const tableHeaderStyle = {
        font: { bold: true, size: 10 },
        fill: { fgColor: { rgb: "92D050" } }, // Light green background
        alignment: { horizontal: "center", vertical: "center", wrapText: true },
        border: {
            top: { style: "thin", color: { rgb: "000000" } },
            bottom: { style: "thin", color: { rgb: "000000" } },
            left: { style: "thin", color: { rgb: "000000" } },
            right: { style: "thin", color: { rgb: "000000" } }
        }
    };
    
    const basicInfoStyle = {
        font: { size: 10 },
        alignment: { horizontal: "left", vertical: "center" }
    };
    
    const cellBorderStyle = {
        border: {
            top: { style: "thin", color: { rgb: "000000" } },
            bottom: { style: "thin", color: { rgb: "000000" } },
            left: { style: "thin", color: { rgb: "000000" } },
            right: { style: "thin", color: { rgb: "000000" } }
        },
        alignment: { vertical: "top", wrapText: true },
        font: { size: 9 }
    };
    
    // Apply header style to A1
    ws['A1'].s = headerStyle;
    
    // Apply basic info style to rows 3-9
    for (let row = 2; row <= 8; row++) {
        ['D', 'E'].forEach(col => {
            const cellRef = col + (row + 1);
            if (ws[cellRef]) {
                ws[cellRef].s = basicInfoStyle;
            }
        });
    }
    
    // Apply table header style to row 11
    ['A', 'B', 'C', 'D'].forEach(col => {
        const cellRef = col + '11';
        if (ws[cellRef]) {
            ws[cellRef].s = tableHeaderStyle;
        }
    });
    
    // Apply borders and styling to data cells
    for (let row = 11; row < data.length; row++) {
        ['A', 'B', 'C', 'D'].forEach(col => {
            const cellRef = col + (row + 1);
            if (ws[cellRef]) {
                ws[cellRef].s = cellBorderStyle;
            }
        });
    }
    
    // Add the worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, 'QC Evaluation');
    
    // Generate and save the file
    const fileName = `QC_Report_${basicInfo.facultyName}_${basicInfo.date}_${basicInfo.time.replace(':', '')}.xlsx`;
    XLSX.writeFile(wb, fileName);
    
    // Show success message
    alert(`Excel report exported successfully as: ${fileName}`);
}

function printResults() {
    if (!validateForm()) {
        alert('Please complete the evaluation before printing.');
        return;
    }
    
    calculateResults(); // Ensure results are up to date
    window.print();
}

function clearForm() {
    if (confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
        // Clear form fields
        document.querySelectorAll('input, select').forEach(element => {
            if (element.type !== 'date' && element.type !== 'time') {
                element.value = '';
            }
        });
        
        // Clear ratings
        window.ratings = {};
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.checked = false;
        });
        
        // Clear results
        clearResults();
        
        // Reset QC type and criteria
        document.getElementById('qcType').value = '';
        document.getElementById('qcTypeIndicator').style.display = 'none';
        document.getElementById('criteriaTitle').textContent = 'Evaluation Criteria';
        document.getElementById('criteriaContainer').innerHTML = '<p class=\"no-criteria\">Please select a QC type to view evaluation criteria.</p>';
        currentCriteria = [];
        
        // Reset date and time
        const now = new Date();
        document.getElementById('date').value = now.toISOString().split('T')[0];
        document.getElementById('time').value = now.toTimeString().substr(0, 5);
    }
}

async function loadHistory() {
    // Load from sync server for real-time multi-device sharing
    const savedEvaluations = await loadFromSyncServer();
    const container = document.getElementById('historyContainer');
    
    if (savedEvaluations.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #718096;">🔄 No evaluation history found. Start by saving an evaluation!</p>';
        return;
    }
    
    // Sort by timestamp (newest first)
    savedEvaluations.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    container.innerHTML = savedEvaluations.map(evaluation => `
        <div class="history-item">
            <div class="history-content" onclick="loadEvaluation(${evaluation.id})">
                <div class="history-date">
                    ${new Date(evaluation.timestamp).toLocaleDateString()} - ${evaluation.basicInfo?.facultyName || 'Unknown Faculty'}
                </div>
                <div class="history-details">
                    ${evaluation.basicInfo?.subject || 'N/A'} | ${evaluation.basicInfo?.shift || 'N/A'} Shift | ${evaluation.basicInfo?.mode || 'N/A'}
                </div>
            </div>
            <div class="history-actions">
                <button class="btn-delete" onclick="deleteEvaluation(${evaluation.id})" title="Delete Evaluation">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

async function deleteEvaluation(evaluationId) {
    if (confirm('🗑️ Are you sure you want to delete this evaluation?\n\nThis will remove it from ALL devices and cannot be undone.')) {
        try {
            const success = await deleteFromSyncServer(evaluationId);
            
            if (success) {
                // Reload the history to reflect changes
                loadHistory();
                
                // Show success message
                alert('✅ Evaluation deleted successfully from all devices!');
            } else {
                alert('❌ Failed to delete evaluation. Please try again.');
            }
        } catch (error) {
            console.error('Failed to delete evaluation:', error);
            alert('❌ Failed to delete evaluation. Please check your connection.');
        }
    }
}

async function loadEvaluation(evaluationId) {
    const savedEvaluations = await loadFromSyncServer();
    const evaluation = savedEvaluations.find(e => e.id === evaluationId);
    
    if (!evaluation) {
        alert('❌ Evaluation not found.');
        return;
    }
    
    if (confirm('📋 Load this evaluation? Current data will be replaced.')) {
        // Load basic info
        Object.keys(evaluation.basicInfo || {}).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.value = evaluation.basicInfo[key];
            }
        });
        
        // Load ratings
        window.ratings = { ...evaluation.ratings || {} };
        
        // Update UI
        Object.keys(evaluation.ratings).forEach(criteriaId => {
            const rating = evaluation.ratings[criteriaId];
            const button = document.querySelector(`[onclick="setRating(${criteriaId}, ${rating})"]`);
            if (button) {
                // Clear previous selections for this criteria
                document.querySelectorAll(`[onclick^="setRating(${criteriaId},"]`).forEach(btn => {
                    btn.classList.remove('selected');
                });
                button.classList.add('selected');
            }
        });
        
        // Load remarks
        if (evaluation.remarks) {
            Object.keys(evaluation.remarks).forEach(criteriaId => {
                const remarksElement = document.getElementById(`remarks-${criteriaId}`);
                if (remarksElement) {
                    remarksElement.value = evaluation.remarks[criteriaId];
                }
            });
        }
        
        // Calculate results
        calculateResults();
    }
}

function autoSaveResults() {
    // Auto-save current state every 30 seconds
    const autoSaveData = gatherEvaluationData();
    localStorage.setItem('qcAutoSave', JSON.stringify(autoSaveData));
}

function loadSavedData() {
    const autoSavedData = localStorage.getItem('qcAutoSave');
    if (autoSavedData) {
        try {
            const data = JSON.parse(autoSavedData);
            
            // Only load if the date matches today (avoid loading stale data)
            const today = new Date().toISOString().split('T')[0];
            if (data.basicInfo.date === today) {
                // Optionally prompt user to restore
                if (confirm('Restore previously saved data from today?')) {
                    loadEvaluationData(data);
                }
            }
        } catch (e) {
            console.log('No valid auto-save data found.');
        }
    }
}

function loadEvaluationData(data) {
    // Load basic info
    Object.keys(data.basicInfo).forEach(key => {
        const element = document.getElementById(key);
        if (element && data.basicInfo[key]) {
            element.value = data.basicInfo[key];
        }
    });
    
    // Load ratings
    if (data.ratings) {
        window.ratings = { ...data.ratings };
        
        Object.keys(data.ratings).forEach(criteriaId => {
            const rating = data.ratings[criteriaId];
            const button = document.querySelector(`[onclick="setRating(${criteriaId}, ${rating})"]`);
            if (button) {
                document.querySelectorAll(`[onclick^="setRating(${criteriaId},"]`).forEach(btn => {
                    btn.classList.remove('selected');
                });
                button.classList.add('selected');
            }
        });
    }
    
    // Load remarks
    if (data.remarks) {
        Object.keys(data.remarks).forEach(criteriaId => {
            const remarksElement = document.getElementById(`remarks-${criteriaId}`);
            if (remarksElement) {
                remarksElement.value = data.remarks[criteriaId];
            }
        });
    }
}

// Auto-save every 30 seconds if there's data
setInterval(() => {
    if (window.ratings && Object.keys(window.ratings).length > 0) {
        autoSaveResults();
    }
}, 30000);

// Overall QC Analysis Functions
function generateOverallReport() {
    const savedEvaluations = JSON.parse(localStorage.getItem('qcEvaluations') || '[]');
    
    if (savedEvaluations.length === 0) {
        alert('No evaluations found. Please complete some evaluations first.');
        return;
    }
    
    const filteredEvaluations = filterEvaluationsByCriteria(savedEvaluations);
    updateOverallStats(filteredEvaluations);
    createOverallCharts(filteredEvaluations);
    generateDetailedAnalysis(filteredEvaluations);
}

function filterEvaluationsByCriteria(evaluations) {
    const filter = document.getElementById('overallFilter').value;
    const dateFrom = document.getElementById('dateFrom').value;
    const dateTo = document.getElementById('dateTo').value;
    
    let filtered = evaluations;
    
    // Filter by QC type
    if (filter !== 'all') {
        filtered = filtered.filter(eval => eval.basicInfo.qcType === filter);
    }
    
    // Filter by date range
    if (dateFrom) {
        filtered = filtered.filter(eval => new Date(eval.basicInfo.date) >= new Date(dateFrom));
    }
    
    if (dateTo) {
        filtered = filtered.filter(eval => new Date(eval.basicInfo.date) <= new Date(dateTo));
    }
    
    return filtered;
}

function updateOverallStats(evaluations) {
    if (evaluations.length === 0) {
        document.getElementById('totalEvaluations').textContent = '0';
        document.getElementById('avgScore').textContent = '0%';
        document.getElementById('bestScore').textContent = '0%';
        document.getElementById('improvementAreas').textContent = '-';
        return;
    }
    
    // Calculate statistics
    const percentages = evaluations.map(eval => calculateEvaluationPercentage(eval));
    const totalEvaluations = evaluations.length;
    const avgScore = (percentages.reduce((sum, p) => sum + p, 0) / totalEvaluations).toFixed(1);
    const bestScore = Math.max(...percentages).toFixed(1);
    
    // Find improvement areas (criteria with consistently low scores)
    const improvementAreas = findImprovementAreas(evaluations);
    
    // Update UI
    document.getElementById('totalEvaluations').textContent = totalEvaluations;
    document.getElementById('avgScore').textContent = avgScore + '%';
    document.getElementById('bestScore').textContent = bestScore + '%';
    document.getElementById('improvementAreas').textContent = improvementAreas;
}

function calculateEvaluationPercentage(evaluation) {
    const qcType = evaluation.basicInfo.qcType;
    const criteria = getCriteriaByType(qcType);
    
    let totalPossible = 0;
    let totalActual = 0;
    
    criteria.forEach(criterion => {
        const rating = evaluation.ratings[criterion.id] || 0;
        if (rating > 0) {
            totalPossible += 5 * criterion.weight;
            totalActual += rating * criterion.weight;
        }
    });
    
    return totalPossible > 0 ? (totalActual / totalPossible) * 100 : 0;
}

function getCriteriaByType(qcType) {
    switch(qcType) {
        case 'student': return studentQCCriteria;
        case 'instructor': return instructorQCCriteria;
        case 'class': return wholeClassQCCriteria;
        case 'resource': return resourceQCCriteria;
        case 'visit': return visitQCCriteria;
        case 'showcase': return showcaseQCCriteria;
        default: return [];
    }
}

function findImprovementAreas(evaluations) {
    const criteriaScores = {};
    
    evaluations.forEach(eval => {
        const qcType = eval.basicInfo.qcType;
        const criteria = getCriteriaByType(qcType);
        
        criteria.forEach(criterion => {
            const key = criterion.title;
            const rating = eval.ratings[criterion.id] || 0;
            
            if (!criteriaScores[key]) {
                criteriaScores[key] = [];
            }
            criteriaScores[key].push(rating);
        });
    });
    
    // Find criteria with average score < 3
    const lowPerformingCriteria = Object.keys(criteriaScores)
        .filter(key => {
            const avg = criteriaScores[key].reduce((sum, score) => sum + score, 0) / criteriaScores[key].length;
            return avg < 3;
        })
        .slice(0, 3); // Top 3 improvement areas
    
    return lowPerformingCriteria.length > 0 ? lowPerformingCriteria.join(', ') : 'None identified';
}

function createOverallCharts(evaluations) {
    createTrendChart(evaluations);
    createDistributionChart(evaluations);
}

function createTrendChart(evaluations) {
    const canvas = document.getElementById('trendChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Destroy existing chart
    if (window.trendChartInstance) {
        window.trendChartInstance.destroy();
    }
    
    // Prepare data
    const sortedEvals = evaluations.sort((a, b) => new Date(a.basicInfo.date) - new Date(b.basicInfo.date));
    const labels = sortedEvals.map(eval => eval.basicInfo.date);
    const data = sortedEvals.map(eval => calculateEvaluationPercentage(eval));
    
    window.trendChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Performance Trend (%)',
                data: data,
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
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
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}

function createDistributionChart(evaluations) {
    const canvas = document.getElementById('distributionChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Destroy existing chart
    if (window.distributionChartInstance) {
        window.distributionChartInstance.destroy();
    }
    
    // Count evaluations by type
    const typeCounts = {
        'student': 0,
        'instructor': 0,
        'class': 0,
        'resource': 0
    };
    
    evaluations.forEach(eval => {
        if (typeCounts.hasOwnProperty(eval.basicInfo.qcType)) {
            typeCounts[eval.basicInfo.qcType]++;
        }
    });
    
    const labels = Object.keys(typeCounts).map(type => getQCTypeDisplayName(type));
    const data = Object.values(typeCounts);
    const colors = ['#667eea', '#48bb78', '#ed8936', '#e53e3e'];
    
    window.distributionChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function generateDetailedAnalysis(evaluations) {
    const container = document.getElementById('detailedAnalysis');
    
    if (evaluations.length === 0) {
        container.innerHTML = '<h3>No data available for analysis</h3>';
        return;
    }
    
    const analysis = calculateDetailedMetrics(evaluations);
    
    container.innerHTML = `
        <h3>Detailed Performance Analysis</h3>
        <table class="analysis-table">
            <thead>
                <tr>
                    <th>QC Type</th>
                    <th>Count</th>
                    <th>Average Score</th>
                    <th>Best Score</th>
                    <th>Worst Score</th>
                    <th>Trend</th>
                </tr>
            </thead>
            <tbody>
                ${Object.keys(analysis).map(type => `
                    <tr>
                        <td>${getQCTypeDisplayName(type)}</td>
                        <td>${analysis[type].count}</td>
                        <td>${analysis[type].average.toFixed(1)}%</td>
                        <td>${analysis[type].best.toFixed(1)}%</td>
                        <td>${analysis[type].worst.toFixed(1)}%</td>
                        <td>${analysis[type].trend}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        
        <h4 style="margin-top: 20px;">Key Insights:</h4>
        <ul style="margin-top: 10px;">
            ${generateInsights(evaluations).map(insight => `<li>${insight}</li>`).join('')}
        </ul>
    `;
}

function calculateDetailedMetrics(evaluations) {
    const metrics = {};
    
    evaluations.forEach(eval => {
        const type = eval.basicInfo.qcType;
        const percentage = calculateEvaluationPercentage(eval);
        
        if (!metrics[type]) {
            metrics[type] = {
                scores: [],
                dates: []
            };
        }
        
        metrics[type].scores.push(percentage);
        metrics[type].dates.push(new Date(eval.basicInfo.date));
    });
    
    // Calculate statistics for each type
    Object.keys(metrics).forEach(type => {
        const scores = metrics[type].scores;
        const dates = metrics[type].dates;
        
        metrics[type] = {
            count: scores.length,
            average: scores.reduce((sum, score) => sum + score, 0) / scores.length,
            best: Math.max(...scores),
            worst: Math.min(...scores),
            trend: calculateTrend(scores, dates)
        };
    });
    
    return metrics;
}

function calculateTrend(scores, dates) {
    if (scores.length < 2) return 'Insufficient data';
    
    // Simple trend calculation: compare first half with second half
    const mid = Math.floor(scores.length / 2);
    const firstHalf = scores.slice(0, mid);
    const secondHalf = scores.slice(mid);
    
    const firstAvg = firstHalf.reduce((sum, score) => sum + score, 0) / firstHalf.length;
    const secondAvg = secondHalf.reduce((sum, score) => sum + score, 0) / secondHalf.length;
    
    const diff = secondAvg - firstAvg;
    
    if (diff > 5) return '📈 Improving';
    if (diff < -5) return '📉 Declining';
    return '➖ Stable';
}

function generateInsights(evaluations) {
    const insights = [];
    const totalEvals = evaluations.length;
    const avgScore = evaluations.reduce((sum, eval) => sum + calculateEvaluationPercentage(eval), 0) / totalEvals;
    
    // Performance insights
    if (avgScore >= 80) {
        insights.push('Overall performance is excellent with an average score above 80%');
    } else if (avgScore >= 60) {
        insights.push('Performance is satisfactory but has room for improvement');
    } else {
        insights.push('Performance needs significant improvement - consider additional training');
    }
    
    // Frequency insights
    if (totalEvals >= 10) {
        insights.push('Good evaluation frequency - sufficient data for reliable analysis');
    } else {
        insights.push('Consider conducting more frequent evaluations for better insights');
    }
    
    // Type-specific insights
    const typeCounts = {};
    evaluations.forEach(eval => {
        typeCounts[eval.basicInfo.qcType] = (typeCounts[eval.basicInfo.qcType] || 0) + 1;
    });
    
    const dominantType = Object.keys(typeCounts).reduce((a, b) => typeCounts[a] > typeCounts[b] ? a : b);
    insights.push(`Most frequent evaluation type: ${getQCTypeDisplayName(dominantType)} (${typeCounts[dominantType]} evaluations)`);
    
    return insights;
}

function exportOverallToExcel() {
    const savedEvaluations = JSON.parse(localStorage.getItem('qcEvaluations') || '[]');
    
    if (savedEvaluations.length === 0) {
        alert('No evaluations found to export.');
        return;
    }
    
    const filteredEvaluations = filterEvaluationsByCriteria(savedEvaluations);
    
    // Check if XLSX library is loaded
    if (typeof XLSX === 'undefined') {
        alert('Excel export library is not loaded. Please refresh the page and try again.');
        return;
    }
    
    const wb = XLSX.utils.book_new();
    
    // Summary sheet
    const summaryData = [
        ['OVERALL QC ANALYSIS REPORT'],
        [''],
        ['Report Generated:', new Date().toLocaleString()],
        ['Total Evaluations:', filteredEvaluations.length],
        ['Date Range:', `${document.getElementById('dateFrom').value || 'All'} to ${document.getElementById('dateTo').value || 'All'}`],
        ['Filter Applied:', document.getElementById('overallFilter').options[document.getElementById('overallFilter').selectedIndex].text],
        ['']
    ];
    
    // Add statistics
    const percentages = filteredEvaluations.map(eval => calculateEvaluationPercentage(eval));
    const avgScore = percentages.length > 0 ? (percentages.reduce((sum, p) => sum + p, 0) / percentages.length).toFixed(1) : 0;
    const bestScore = percentages.length > 0 ? Math.max(...percentages).toFixed(1) : 0;
    const worstScore = percentages.length > 0 ? Math.min(...percentages).toFixed(1) : 0;
    
    summaryData.push(['OVERALL STATISTICS', '', '', '']);
    summaryData.push(['Average Score:', avgScore + '%', '', '']);
    summaryData.push(['Best Score:', bestScore + '%', '', '']);
    summaryData.push(['Worst Score:', worstScore + '%', '', '']);
    summaryData.push(['', '', '', '']);
    
    // Detailed evaluations table
    summaryData.push(['DETAILED EVALUATIONS', '', '', '']);
    summaryData.push(['Date', 'Faculty', 'QC Type', 'Subject', 'Score %', 'Performance']);
    
    filteredEvaluations.forEach(eval => {
        const percentage = calculateEvaluationPercentage(eval).toFixed(1);
        const performance = percentage >= 80 ? 'Excellent' : percentage >= 60 ? 'Good' : percentage >= 40 ? 'Average' : 'Needs Improvement';
        
        summaryData.push([
            eval.basicInfo.date,
            eval.basicInfo.facultyName,
            getQCTypeDisplayName(eval.basicInfo.qcType),
            eval.basicInfo.subject,
            percentage + '%',
            performance
        ]);
    });
    
    const ws = XLSX.utils.aoa_to_sheet(summaryData);
    
    // Set column widths
    ws['!cols'] = [
        { wch: 25 }, { wch: 25 }, { wch: 15 }, { wch: 25 }, { wch: 12 }, { wch: 15 }
    ];
    
    // Style the header
    if (ws['A1']) {
        ws['A1'].s = {
            font: { bold: true, color: { rgb: "FFFFFF" }, size: 16 },
            fill: { fgColor: { rgb: "667eea" } },
            alignment: { horizontal: "center" }
        };
    }
    
    XLSX.utils.book_append_sheet(wb, ws, 'Overall Analysis');
    
    // Save the file
    const fileName = `Overall_QC_Analysis_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);
    
    alert(`Overall QC analysis exported successfully as: ${fileName}`);
}

function filterOverallResults() {
    generateOverallReport();
}

// Export/Import Functions for Cross-Device Sync
function exportEvaluationHistory() {
    const savedEvaluations = JSON.parse(localStorage.getItem('qcEvaluations') || '[]');
    
    if (savedEvaluations.length === 0) {
        alert('No evaluation history found to export.');
        return;
    }
    
    const exportData = {
        version: '1.0',
        timestamp: new Date().toISOString(),
        evaluations: savedEvaluations,
        metadata: {
            totalEvaluations: savedEvaluations.length,
            exportedBy: 'QC Calculator',
            dateRange: {
                earliest: savedEvaluations.reduce((earliest, eval) => 
                    new Date(eval.basicInfo.date) < new Date(earliest.basicInfo.date) ? eval : earliest
                ).basicInfo.date,
                latest: savedEvaluations.reduce((latest, eval) => 
                    new Date(eval.basicInfo.date) > new Date(latest.basicInfo.date) ? eval : latest
                ).basicInfo.date
            }
        }
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `QC_Evaluation_History_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert(`Successfully exported ${savedEvaluations.length} evaluations to ${link.download}`);
}

function importEvaluationHistory() {
    const fileInput = document.getElementById('historyFileInput');
    fileInput.click();
}

function handleHistoryImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importData = JSON.parse(e.target.result);
            
            // Validate import data structure
            if (!importData.evaluations || !Array.isArray(importData.evaluations)) {
                alert('Invalid file format. Please select a valid QC evaluation history file.');
                return;
            }
            
            const existingEvaluations = JSON.parse(localStorage.getItem('qcEvaluations') || '[]');
            const importedEvaluations = importData.evaluations;
            
            // Check for duplicates and merge
            const existingIds = new Set(existingEvaluations.map(eval => eval.id));
            const newEvaluations = importedEvaluations.filter(eval => !existingIds.has(eval.id));
            
            if (newEvaluations.length === 0) {
                alert('No new evaluations found. All evaluations in the file already exist in your history.');
                return;
            }
            
            const confirmMessage = `Found ${newEvaluations.length} new evaluations to import.\n` +
                                 `Existing evaluations: ${existingEvaluations.length}\n` +
                                 `New evaluations: ${newEvaluations.length}\n\n` +
                                 `Do you want to proceed with the import?`;
            
            if (confirm(confirmMessage)) {
                const mergedEvaluations = [...existingEvaluations, ...newEvaluations];
                localStorage.setItem('qcEvaluations', JSON.stringify(mergedEvaluations));
                
                // Reload history to show imported evaluations
                loadHistory();
                
                alert(`Successfully imported ${newEvaluations.length} evaluations!\n` +
                      `Total evaluations now: ${mergedEvaluations.length}`);
            }
            
        } catch (error) {
            alert('Error reading file. Please ensure it\'s a valid JSON file exported from QC Calculator.');
            console.error('Import error:', error);
        }
        
        // Clear the file input
        event.target.value = '';
    };
    
    reader.readAsText(file);
}

// Real-time sync monitoring and status functions
let syncStatus = { connected: false, lastSync: null };

async function checkSyncServerStatus() {
    try {
        const response = await fetch('/api/status');
        if (response.ok) {
            const status = await response.json();
            syncStatus.connected = true;
            syncStatus.lastSync = new Date();
            updateSyncStatusDisplay(true, status);
            return status;
        }
    } catch (error) {
        syncStatus.connected = false;
        updateSyncStatusDisplay(false);
        console.error('Sync server not available:', error);
    }
    return null;
}

function updateSyncStatusDisplay(connected, status = null) {
    // Create or update sync status indicator
    let statusElement = document.getElementById('sync-status');
    if (!statusElement) {
        statusElement = document.createElement('div');
        statusElement.id = 'sync-status';
        statusElement.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            padding: 8px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            z-index: 1000;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        `;
        document.body.appendChild(statusElement);
    }
    
    if (connected) {
        statusElement.innerHTML = `🟢 SYNC ACTIVE${status ? ` (${status.total_evaluations} evaluations)` : ''}`;
        statusElement.style.background = '#d4edda';
        statusElement.style.color = '#155724';
        statusElement.style.border = '1px solid #c3e6cb';
    } else {
        statusElement.innerHTML = '🔴 OFFLINE MODE';
        statusElement.style.background = '#f8d7da';
        statusElement.style.color = '#721c24';
        statusElement.style.border = '1px solid #f5c6cb';
    }
}

// Auto-refresh functionality for real-time sync
let autoRefreshInterval;

function startAutoRefresh() {
    // Check sync status every 30 seconds
    checkSyncServerStatus();
    
    autoRefreshInterval = setInterval(() => {
        checkSyncServerStatus();
        
        // Auto-refresh history if on history tab and sync is active
        if (syncStatus.connected && document.getElementById('historyContainer').innerHTML.trim() !== '') {
            loadHistory();
        }
    }, 30000);
}

function stopAutoRefresh() {
    if (autoRefreshInterval) {
        clearInterval(autoRefreshInterval);
    }
}

// Initialize sync monitoring when page loads
document.addEventListener('DOMContentLoaded', function() {
    startAutoRefresh();
    
    // Show initial connection attempt
    setTimeout(() => {
        checkSyncServerStatus();
    }, 1000);
});

// Handle page visibility changes to pause/resume sync
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        stopAutoRefresh();
    } else {
        startAutoRefresh();
    }
});

// Export sync utilities for manual use
window.syncUtilities = {
    checkStatus: checkSyncServerStatus,
    forceRefresh: loadHistory,
    getStatus: () => syncStatus
};

// =============================================
// PARETO PROBLEM & CAUSE ANALYSIS
// =============================================
let paretoAnalysisChart = null;

// Potential-cause lookup per QC type and criteria keyword
const potentialCauses = {
    // Student QC
    "Attendance and Punctuality": "Lack of motivation, personal issues, transportation problems, or unclear schedule",
    "Active Participation": "Low confidence, language barriers, lack of preparation, or unengaging teaching methods",
    "Understanding of Concepts": "Weak foundational knowledge, fast-paced teaching, or insufficient practice opportunities",
    "Assignment Submission": "Poor time management, unclear instructions, excessive workload, or lack of accountability",
    "Classroom Behavior": "Peer influence, lack of discipline policies, personal stress, or boredom",
    "Initiative and Curiosity": "Fear of failure, lack of encouragement, rigid curriculum, or insufficient resources",
    "Collaborative Skills": "Personality conflicts, uneven group dynamics, unclear roles, or lack of teamwork training",
    "Response to Feedback": "Defensive attitude, unclear feedback delivery, lack of follow-up, or low self-awareness",

    // Instructor QC
    "Preparation and Punctuality": "Overloaded schedule, poor time management, lack of planning tools, or low accountability",
    "Content Delivery": "Insufficient subject knowledge, lack of training, poor communication skills, or no lesson plan",
    "Student Engagement": "Monotonous teaching style, no interactive activities, large class size, or lack of technology use",
    "Classroom Management": "Inconsistent rules, lack of authority, too lenient approach, or no behavior policy",
    "Use of Teaching Aids/Tools": "Unavailability of resources, lack of tech training, infrastructure issues, or time constraints",
    "Encourages Thinking": "Exam-focused teaching, rigid syllabus, lack of open-ended activities, or time pressure",
    "Feedback Mechanism": "Large class size, time constraints, no structured feedback process, or lack of assessment tools",
    "Student Attentiveness and Responsiveness": "Boring delivery, distractions, fatigue, uncomfortable environment, or irrelevant content",
    "Student Disciplinary": "Unclear rules, favoritism, inconsistent enforcement, or lack of consequences",
    "Professionalism & Ethics": "Personal bias, stress, lack of professional development, or poor role modeling",
    "Organization and Execution of Exposure Visits": "Poor planning, budget constraints, safety concerns, or lack of coordination",

    // Whole Class QC
    "Overall Class Engagement": "Uninteresting content, passive teaching, lack of group activities, or class size issues",
    "Learning Environment": "Poor infrastructure, noise, overcrowding, inadequate lighting/ventilation, or distractions",
    "Class Discipline": "Weak enforcement, peer pressure, lack of class rules, or absent teacher authority",
    "Collaborative Learning": "No group activities planned, individual-focused assessment, or social conflicts",
    "Understanding Level": "Mismatched difficulty, language barriers, varied learning abilities, or insufficient examples",
    "Class Participation": "Fear of judgment, large class, dominant students, or no participation incentives",
    "Peer Interaction": "Cliques, bullying, competitive environment, or lack of icebreaker activities",
    "Session Effectiveness": "Poor time management, unclear objectives, no assessment, or disorganized content",
    "Technology and Resource Utilization": "Limited access, technical issues, lack of training, or outdated equipment",
    "Classroom Cleanliness": "No assigned responsibilities, lack of bins, student negligence, or poor facility maintenance",

    // Resource QC
    "Resource Availability": "Budget limitations, procurement delays, poor inventory management, or high demand",
    "Resource Quality and Condition": "Wear and tear, no maintenance schedule, low-quality purchases, or mishandling",
    "Resource Distribution Efficiency": "No distribution plan, limited staff, disorganized storage, or timing issues",
    "Resource Relevance to Subject": "Outdated materials, generic resources, no curriculum mapping, or poor planning",
    "Timely Resource Provision": "Supply chain delays, last-minute planning, communication gaps, or storage distance",
    "Resource Management and Organization": "No tracking system, lack of ownership, poor labeling, or no SOPs",
    "Impact on Learning Environment": "Clutter, noise from equipment, safety hazards, or accessibility issues",
    "Resource Maintenance and Safety": "No maintenance schedule, untrained handlers, missing safety gear, or old equipment",
    "Resource Utilization Tracking": "No digital tracking, manual errors, lack of accountability, or no audits",
    "Resource Return and Submission": "No return policy, student negligence, missing accountability, or no checklist",
    "Backup Resource Planning": "No contingency budget, single-source dependency, or lack of risk assessment",

    // Visit QC
    "Visit Planning and Coordination": "Late planning, poor communication, unclear roles, or scheduling conflicts",
    "Educational Objectives Alignment": "Mismatched site selection, vague learning goals, or no pre-visit briefing",
    "Student Preparation and Briefing": "Insufficient time, no briefing materials, unclear expectations, or last-minute changes",
    "Safety and Security Measures": "No risk assessment, inadequate first-aid, missing emergency plan, or untrained staff",
    "Guide/Facilitator Expertise": "Unqualified guide, poor communication skills, or lack of subject knowledge",
    "Student Engagement and Interaction": "Passive format, no hands-on activities, large groups, or language barriers",
    "Relevance and Practical Application": "Theoretical-only focus, outdated site, or no real-world connection emphasized",
    "Visit Documentation and Follow-up": "No reporting template, time constraints, no debrief session, or unclear expectations",
    "Time Management and Schedule Adherence": "Traffic delays, overruns at site, poor scheduling, or too many stops",
    "Transportation and Logistics": "Unreliable transport, poor route planning, budget issues, or vehicle capacity",

    // Showcase QC
    "Content Quality and Relevance": "Insufficient research, off-topic content, lack of guidance, or rushed preparation",
    "Presentation Skills and Delivery": "Stage fright, no rehearsal, poor communication skills, or lack of training",
    "Innovation and Creativity": "Fear of experimentation, time pressure, limited resources, or rigid guidelines",
    "Technical Execution and Setup": "Equipment failure, no tech rehearsal, incompatible formats, or power issues",
    "Audience Engagement and Interaction": "One-way presentation, no Q&A, monotone delivery, or disconnected audience",
    "Organization and Structure": "No outline, scattered content, time mismanagement, or unclear flow",
    "Visual and Multimedia Elements": "Poor design skills, overloaded slides, low-quality media, or no visuals",
    "Time Management and Pacing": "No practice, too much content, nervousness, or no time keeper",
    "Collaborative Teamwork": "Unequal effort, role confusion, personality clashes, or no coordination meetings",
    "Learning Outcomes Achievement": "Unclear objectives, surface-level content, no assessment, or misaligned goals",
    "Professional Presentation Standards": "Casual attitude, no dress code, informal language, or lack of awareness",

    // New Student QC criteria
    "Assessment & Test Performance": "Insufficient study time, unclear test format, anxiety, weak foundation, or inadequate revision",
    "Practical & Lab Skills": "Limited lab access, lack of practice, unclear instructions, insufficient equipment, or weak theoretical base",

    // New Instructor QC criteria
    "Mentoring & Individual Support": "Large student-to-faculty ratio, time constraints, lack of counseling training, or no structured mentoring program",
    "Assessment & Evaluation Quality": "Rushed grading, unclear rubrics, inconsistent standards, no peer review, or delayed feedback",

    // New Whole Class QC criteria
    "Lab & Practical Session Effectiveness": "Equipment shortage, large groups, insufficient time, unclear objectives, or no lab assistants",
    "Guest Lecture & Workshop Engagement": "Irrelevant topics, poor speaker selection, no pre-briefing, scheduling conflicts, or passive format"
};

function generateParetoAnalysis() {
    if (!window.ratings || !currentCriteria || !currentCriteria.length) {
        alert('Please select a QC Type, rate all criteria, and calculate results first.');
        return;
    }

    const ratedCount = Object.keys(window.ratings).length;
    if (ratedCount !== currentCriteria.length) {
        alert('Please rate all criteria and calculate results first.');
        return;
    }

    // Build deficiency data: gap = max(5) - rating, sorted biggest to smallest
    const data = currentCriteria.map(c => {
        const rating = getRating(c.id);
        const gap = 5 - rating;
        const cause = potentialCauses[c.title] || 'Review process, training, resources, and environment factors';
        return { id: c.id, title: c.title, rating, gap, weight: c.weight, cause };
    }).sort((a, b) => b.gap - a.gap || b.weight - a.weight);

    // Render chart
    renderParetoChart(data);

    // Render detail cards
    renderParetoDetails(data);

    // Show section
    document.getElementById('paretoAnalysisSection').style.display = 'block';
    document.getElementById('paretoAnalysisSection').scrollIntoView({ behavior: 'smooth' });
}

function renderParetoChart(data) {
    const ctx = document.getElementById('paretoAnalysisChart').getContext('2d');

    if (paretoAnalysisChart) {
        paretoAnalysisChart.destroy();
        paretoAnalysisChart = null;
    }

    const labels = data.map(d => d.title.length > 22 ? d.title.substring(0, 19) + '...' : d.title);
    const gaps = data.map(d => d.gap);
    const totalGap = gaps.reduce((a, b) => a + b, 0);
    let cumulative = 0;
    const cumPct = gaps.map(g => {
        cumulative += g;
        return totalGap > 0 ? parseFloat(((cumulative / totalGap) * 100).toFixed(1)) : 0;
    });

    const barColors = gaps.map(g => {
        if (g >= 4) return 'rgba(229, 62, 62, 0.8)';
        if (g >= 3) return 'rgba(221, 107, 32, 0.8)';
        if (g >= 2) return 'rgba(214, 158, 46, 0.8)';
        if (g >= 1) return 'rgba(49, 130, 206, 0.8)';
        return 'rgba(56, 161, 105, 0.8)';
    });

    paretoAnalysisChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [
                {
                    label: 'Deficiency Gap (from 5)',
                    data: gaps,
                    backgroundColor: barColors,
                    borderColor: barColors.map(c => c.replace('0.8', '1')),
                    borderWidth: 1,
                    borderRadius: 4,
                    yAxisID: 'y'
                },
                {
                    label: 'Cumulative %',
                    data: cumPct,
                    type: 'line',
                    borderColor: '#805ad5',
                    backgroundColor: 'rgba(128, 90, 213, 0.1)',
                    fill: false,
                    tension: 0.3,
                    pointRadius: 5,
                    pointBackgroundColor: '#805ad5',
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Problems Ranked by Deficiency Gap (Biggest → Smallest)',
                    font: { size: 15, weight: 'bold' },
                    color: '#2d3748'
                },
                tooltip: {
                    callbacks: {
                        label: function (ctx) {
                            if (ctx.dataset.label === 'Cumulative %') return `Cumulative: ${ctx.raw}%`;
                            const item = data[ctx.dataIndex];
                            return [`Gap: ${item.gap} (Rated ${item.rating}/5)`, `Weight: ${item.weight}`];
                        },
                        title: function (ctx) {
                            return data[ctx[0].dataIndex].title;
                        }
                    }
                },
                legend: { position: 'bottom' }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5,
                    ticks: { stepSize: 1 },
                    title: { display: true, text: 'Deficiency Gap' }
                },
                y1: {
                    position: 'right',
                    min: 0,
                    max: 100,
                    title: { display: true, text: 'Cumulative %' },
                    grid: { drawOnChartArea: false },
                    ticks: { callback: v => v + '%' }
                },
                x: {
                    ticks: { maxRotation: 45, minRotation: 30 },
                    title: { display: true, text: 'Criteria (sorted by gap)' }
                }
            }
        }
    });
}

function renderParetoDetails(data) {
    const container = document.getElementById('paretoDetails');

    // If everything is rated 5, show a congratulatory message
    if (data.every(d => d.gap === 0)) {
        container.innerHTML = `
            <div class="pareto-no-issues">
                <i class="fas fa-trophy"></i>
                All criteria scored Excellent (5/5) — No problems detected. Outstanding performance!
            </div>`;
        return;
    }

    let html = '';
    data.forEach((d, i) => {
        const pct = (d.rating / 5 * 100);
        const severityClass = d.gap >= 3 ? 'critical' : d.gap >= 2 ? 'warning' : d.gap >= 1 ? 'minor' : 'ok';
        const barColor = d.gap >= 3 ? '#e53e3e' : d.gap >= 2 ? '#dd6b20' : d.gap >= 1 ? '#d69e2e' : '#38a169';

        html += `
            <div class="pareto-item">
                <div class="pareto-rank ${severityClass}">#${i + 1}</div>
                <div class="pareto-content">
                    <h4>${d.title}</h4>
                    <div class="pareto-score-bar">
                        <div class="bar-track">
                            <div class="bar-fill" style="width:${pct}%;background:${barColor};"></div>
                        </div>
                        <span class="score-label" style="color:${barColor};">${d.rating}/5 (Gap: ${d.gap})</span>
                    </div>
                    <div class="pareto-cause">
                        <i class="fas fa-exclamation-triangle"></i>
                        <span><strong>Potential Causes:</strong> ${d.cause}</span>
                    </div>
                </div>
            </div>`;
    });

    container.innerHTML = html;
}

function closeParetoAnalysis() {
    document.getElementById('paretoAnalysisSection').style.display = 'none';
    if (paretoAnalysisChart) {
        paretoAnalysisChart.destroy();
        paretoAnalysisChart = null;
    }
}

// =============================================
// SEP PROCESS FLOWCHART
// =============================================

// Complete SEP 3-month course process steps.
// Each step maps to QC types and optionally to activity types for precise tracking.
const sepProcessSteps = [
    {
        id: 'enrollment',
        title: 'Student Enrollment & Orientation',
        description: 'New student registration, induction program, course introduction, and setting expectations',
        qcTypes: ['student', 'class'],
        activityTypes: ['orientation'],
        icon: 'fa-user-plus',
        phase: 'Foundation (Weeks 1-2)',
        weekRange: [1, 2]
    },
    {
        id: 'planning',
        title: 'Course Planning & Resource Setup',
        description: 'Curriculum design, timetable creation, resource allocation, and session planning',
        qcTypes: ['resource'],
        activityTypes: [],
        icon: 'fa-clipboard-list',
        phase: 'Foundation (Weeks 1-2)',
        weekRange: [1, 2]
    },
    {
        id: 'instructor_prep',
        title: 'Instructor Preparation & Readiness',
        description: 'Faculty lesson planning, content preparation, teaching material development, and readiness check',
        qcTypes: ['instructor'],
        activityTypes: [],
        icon: 'fa-chalkboard-teacher',
        phase: 'Foundation (Weeks 1-2)',
        weekRange: [1, 3]
    },
    {
        id: 'classroom_teaching',
        title: 'Regular Classroom Teaching',
        description: 'Daily class sessions — content delivery, engagement, classroom management, and teaching effectiveness',
        qcTypes: ['instructor', 'class'],
        activityTypes: ['regular_class'],
        icon: 'fa-book-open',
        phase: 'Core Delivery (Ongoing)',
        weekRange: [1, 12]
    },
    {
        id: 'student_learning',
        title: 'Student Learning & Participation',
        description: 'Student attendance, understanding, assignments, behavior, curiosity, and collaboration',
        qcTypes: ['student'],
        activityTypes: ['regular_class'],
        icon: 'fa-user-graduate',
        phase: 'Core Delivery (Ongoing)',
        weekRange: [1, 12]
    },
    {
        id: 'lab_practical',
        title: 'Lab & Practical Sessions',
        description: 'Hands-on training, practical experiments, skill-building activities, and lab work',
        qcTypes: ['student', 'class'],
        activityTypes: ['lab_practical'],
        icon: 'fa-flask',
        phase: 'Core Delivery (Ongoing)',
        weekRange: [2, 12]
    },
    {
        id: 'mentoring',
        title: 'Mentoring & Student Support',
        description: 'One-on-one guidance, academic counseling, performance tracking, and individual student support',
        qcTypes: ['instructor'],
        activityTypes: ['mentoring'],
        icon: 'fa-hands-helping',
        phase: 'Core Delivery (Ongoing)',
        weekRange: [2, 12]
    },
    {
        id: 'assessments',
        title: 'Assessments & Testing',
        description: 'Periodic tests, quizzes, mock exams, evaluation design, grading quality, and student performance tracking',
        qcTypes: ['student', 'instructor'],
        activityTypes: ['assessment'],
        icon: 'fa-file-alt',
        phase: 'Core Delivery (Ongoing)',
        weekRange: [3, 12]
    },
    {
        id: 'resource_mgmt',
        title: 'Resource Management',
        description: 'Ongoing resource distribution, maintenance, inventory tracking, safety, and backup planning',
        qcTypes: ['resource'],
        activityTypes: [],
        icon: 'fa-boxes',
        phase: 'Core Delivery (Ongoing)',
        weekRange: [1, 12]
    },
    {
        id: 'workshops',
        title: 'Guest Lectures & Workshops',
        description: 'External expert sessions, industry workshops, special events, and supplementary learning activities',
        qcTypes: ['class'],
        activityTypes: ['workshop'],
        icon: 'fa-microphone',
        phase: 'Enrichment (Weeks 4-10)',
        weekRange: [4, 10]
    },
    {
        id: 'exposure_visits',
        title: 'Exposure Visits & Field Activities',
        description: 'Educational field trips, industry visits, safety planning, logistics, and practical experience',
        qcTypes: ['visit'],
        activityTypes: ['field_visit'],
        icon: 'fa-bus',
        phase: 'Enrichment (Weeks 4-10)',
        weekRange: [4, 10]
    },
    {
        id: 'project_work',
        title: 'Project Development',
        description: 'Student project work, group assignments, practical application of skills, and project mentoring',
        qcTypes: ['student', 'class', 'instructor'],
        activityTypes: ['project_work'],
        icon: 'fa-laptop-code',
        phase: 'Enrichment (Weeks 4-10)',
        weekRange: [5, 11]
    },
    {
        id: 'showcase',
        title: 'Project Showcase & Presentations',
        description: 'Final project demonstrations, presentations, innovation display, and audience engagement',
        qcTypes: ['showcase'],
        activityTypes: ['showcase'],
        icon: 'fa-trophy',
        phase: 'Completion (Weeks 10-12)',
        weekRange: [10, 12]
    },
    {
        id: 'feedback_review',
        title: 'Feedback Collection & Final Review',
        description: 'Student and faculty feedback, overall performance review, improvement planning, and lessons learned',
        qcTypes: ['student', 'instructor', 'class', 'resource', 'visit', 'showcase'],
        activityTypes: ['review_meeting'],
        icon: 'fa-comments',
        phase: 'Completion (Weeks 10-12)',
        weekRange: [11, 12]
    },
    {
        id: 'completion',
        title: 'Course Completion & Certification',
        description: 'Final assessments, certificate preparation, course wrap-up, and transition planning for next batch',
        qcTypes: ['student', 'instructor', 'class'],
        activityTypes: [],
        icon: 'fa-graduation-cap',
        phase: 'Completion (Weeks 10-12)',
        weekRange: [12, 12]
    }
];

// Decision checkpoints inserted between phases
const flowDecisionPoints = {
    'instructor_prep': {
        title: 'Foundation Readiness Check',
        question: 'Are course planning, resources, and instructor preparation adequate to begin core delivery?',
        evalStepIds: ['enrollment', 'planning', 'instructor_prep'],
        pass: '✅ Foundation is solid — proceed to core delivery',
        fail: '⚠️ Foundation gaps detected — address before proceeding'
    },
    'resource_mgmt': {
        title: 'Core Delivery Quality Check',
        question: 'Are teaching, student learning, mentoring, and assessment quality meeting standards?',
        evalStepIds: ['classroom_teaching', 'student_learning', 'lab_practical', 'mentoring', 'assessments', 'resource_mgmt'],
        pass: '✅ Core delivery is on track — proceed to enrichment',
        fail: '⚠️ Corrective action needed in core delivery areas'
    },
    'project_work': {
        title: 'Showcase Readiness Check',
        question: 'Have enrichment activities and project work prepared students for the final showcase?',
        evalStepIds: ['workshops', 'exposure_visits', 'project_work'],
        pass: '✅ Students are showcase-ready — proceed to completion',
        fail: '⚠️ Additional preparation needed before showcase phase'
    }
};

async function generateProcessFlowchart() {
    // Load all evaluations
    const evaluations = await loadFromSyncServer();

    if (evaluations.length === 0) {
        alert('No evaluation history found. Complete some QC evaluations first to generate the process flowchart.');
        return;
    }

    // Calculate step metrics from evaluations
    const stepMetrics = computeStepMetrics(evaluations);

    // Render legend
    renderFlowchartLegend();

    // Render the flowchart
    renderFlowchart(stepMetrics);

    // Generate insights
    renderFlowchartInsights(stepMetrics, evaluations);

    // Show section
    document.getElementById('flowchartSection').style.display = 'block';
    document.getElementById('flowchartSection').scrollIntoView({ behavior: 'smooth' });
}

function computeStepMetrics(evaluations) {
    return sepProcessSteps.map(step => {
        let relevantEvals;

        // If step has activityTypes, try matching by both qcType AND activityType
        if (step.activityTypes && step.activityTypes.length > 0) {
            const activityMatched = evaluations.filter(e =>
                step.qcTypes.includes(e.basicInfo?.qcType) &&
                step.activityTypes.includes(e.basicInfo?.activityType)
            );

            if (activityMatched.length > 0) {
                relevantEvals = activityMatched;
            } else {
                // Fallback: match by qcType only (for old evaluations without activityType)
                relevantEvals = evaluations.filter(e => step.qcTypes.includes(e.basicInfo?.qcType));
            }
        } else {
            relevantEvals = evaluations.filter(e => step.qcTypes.includes(e.basicInfo?.qcType));
        }

        if (relevantEvals.length === 0) {
            return { ...step, avgScore: null, evalCount: 0, trend: null, scores: [], dates: [] };
        }

        // Calculate percentage for each relevant evaluation
        const scored = relevantEvals.map(e => {
            const pct = calculateEvaluationPercentage(e);
            return { pct, date: e.basicInfo?.date || '' };
        }).sort((a, b) => new Date(a.date) - new Date(b.date));

        const scores = scored.map(s => s.pct);
        const dates = scored.map(s => s.date);
        const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;

        // Trend: compare first vs second half
        let trend = 'stable';
        if (scores.length >= 2) {
            const mid = Math.floor(scores.length / 2);
            const firstAvg = scores.slice(0, mid).reduce((a, b) => a + b, 0) / mid;
            const secondAvg = scores.slice(mid).reduce((a, b) => a + b, 0) / (scores.length - mid);
            if (secondAvg - firstAvg > 5) trend = 'improving';
            else if (firstAvg - secondAvg > 5) trend = 'declining';
        }

        return { ...step, avgScore: Math.round(avgScore * 10) / 10, evalCount: relevantEvals.length, trend, scores, dates };
    });
}

function getStatusClass(score) {
    if (score === null) return 'status-none';
    if (score >= 80) return 'status-excellent';
    if (score >= 65) return 'status-good';
    if (score >= 50) return 'status-average';
    return 'status-poor';
}

function getStatusColor(score) {
    if (score === null) return '#a0aec0';
    if (score >= 80) return '#38a169';
    if (score >= 65) return '#3182ce';
    if (score >= 50) return '#d69e2e';
    return '#e53e3e';
}

function getConnectorColor(score) {
    if (score === null) return '';
    if (score >= 65) return 'green';
    if (score >= 50) return 'yellow';
    return 'red';
}

function renderFlowchartLegend() {
    const container = document.getElementById('flowchartLegend');
    container.innerHTML = `
        <div class="legend-item"><span class="legend-dot" style="background:#38a169;"></span> Excellent (≥80%)</div>
        <div class="legend-item"><span class="legend-dot" style="background:#3182ce;"></span> Good (65-79%)</div>
        <div class="legend-item"><span class="legend-dot" style="background:#d69e2e;"></span> Average (50-64%)</div>
        <div class="legend-item"><span class="legend-dot" style="background:#e53e3e;"></span> Poor (<50%)</div>
        <div class="legend-item"><span class="legend-dot" style="background:#a0aec0;border-style:dashed;"></span> No Data Yet</div>
        <div class="legend-item"><span class="legend-shape diamond" style="background:#ecc94b;"></span> Decision Point</div>
    `;
}

function renderFlowchart(stepMetrics) {
    const canvas = document.getElementById('flowchartCanvas');
    let html = '';

    // --- START node ---
    html += `<div class="flow-node start">
        <div class="flow-node-inner">
            <div class="flow-node-title"><i class="fas fa-play-circle"></i>&nbsp; SEP Course Begins</div>
            <div class="flow-node-meta">3-Month Quality Control Journey — All School Activities Tracked</div>
        </div>
    </div>`;

    let currentPhase = '';

    stepMetrics.forEach((step, idx) => {
        // Phase label if changed
        if (step.phase !== currentPhase) {
            currentPhase = step.phase;
            html += `<div class="flow-connector"><div class="line"></div><div class="arrow"></div></div>`;
            html += `<div style="background:linear-gradient(135deg,#2b6cb0,#4299e1);color:white;padding:6px 22px;border-radius:20px;font-weight:700;font-size:0.85em;letter-spacing:0.5px;">
                <i class="fas fa-layer-group"></i>&nbsp; Phase: ${currentPhase}
            </div>`;
        }

        const statusCls = getStatusClass(step.avgScore);
        const statusClr = getStatusColor(step.avgScore);
        const connColor = getConnectorColor(step.avgScore);

        // Connector arrow
        html += `<div class="flow-connector ${connColor}"><div class="line"></div><div class="arrow"></div></div>`;

        // Activity type label for nodes that track specific activities
        const activityLabel = step.activityTypes && step.activityTypes.length > 0
            ? step.activityTypes.map(a => getActivityDisplayName(a)).join(', ') + ' &nbsp;|&nbsp; '
            : '';

        // Process node
        html += `<div class="flow-node process ${statusCls}">
            <div class="flow-node-inner">
                <div class="flow-node-title"><i class="fas ${step.icon}"></i>&nbsp; ${step.title}</div>
                <div class="flow-node-meta">${step.description}</div>
                <div class="flow-node-meta">${activityLabel}Weeks ${step.weekRange[0]}-${step.weekRange[1]} &nbsp;|&nbsp; ${step.qcTypes.map(t => getQCTypeDisplayName(t)).join(', ')} &nbsp;|&nbsp; ${step.evalCount} eval${step.evalCount !== 1 ? 's' : ''}</div>`;

        if (step.avgScore !== null) {
            html += `<div class="flow-node-score" style="color:${statusClr};">${step.avgScore}%</div>`;
            html += `<div class="flow-node-bar"><div class="flow-node-bar-fill" style="width:${step.avgScore}%;background:${statusClr};"></div></div>`;
            const trendIcon = step.trend === 'improving' ? '📈 Improving' : step.trend === 'declining' ? '📉 Declining' : '➖ Stable';
            html += `<div class="flow-node-meta" style="margin-top:4px;">Trend: ${trendIcon}</div>`;
            if (step.avgScore < 50) {
                html += `<span class="flow-node-flag flag-bottleneck"><i class="fas fa-exclamation-circle"></i> BOTTLENECK</span>`;
            } else if (step.avgScore < 65) {
                html += `<span class="flow-node-flag flag-warning"><i class="fas fa-exclamation-triangle"></i> NEEDS ATTENTION</span>`;
            } else if (step.avgScore >= 80) {
                html += `<span class="flow-node-flag flag-strong"><i class="fas fa-check-circle"></i> STRONG</span>`;
            }
        } else {
            html += `<div class="flow-node-score" style="color:#a0aec0;">No data</div>`;
            html += `<div class="flow-node-meta">Complete <strong>${step.qcTypes.map(t => getQCTypeDisplayName(t)).join(' / ')}</strong> evaluations${step.activityTypes.length > 0 ? ' with activity type <strong>' + step.activityTypes.map(a => getActivityDisplayName(a)).join('/') + '</strong>' : ''} to populate this step</div>`;
        }

        html += `</div></div>`;

        // Insert decision diamond if this step has one
        if (flowDecisionPoints[step.id]) {
            const dp = flowDecisionPoints[step.id];
            const dpSteps = stepMetrics.filter(s => dp.evalStepIds.includes(s.id));
            const dpScores = dpSteps.filter(s => s.avgScore !== null).map(s => s.avgScore);
            const dpAvg = dpScores.length > 0 ? dpScores.reduce((a, b) => a + b, 0) / dpScores.length : null;
            const passing = dpAvg !== null && dpAvg >= 60;

            html += `<div class="flow-connector"><div class="line"></div><div class="arrow"></div></div>`;
            html += `<div class="flow-node decision">
                <div class="flow-node-inner">
                    <div class="flow-node-title"><i class="fas fa-question-circle"></i>&nbsp; ${dp.title}</div>
                    <div class="flow-node-meta">${dp.question}</div>`;
            if (dpAvg !== null) {
                html += `<div class="flow-node-score" style="color:${getStatusColor(dpAvg)};">${Math.round(dpAvg)}% avg</div>`;
                html += `<div class="flow-node-meta" style="font-weight:700;color:${passing ? '#38a169' : '#e53e3e'};">${passing ? dp.pass : dp.fail}</div>`;
            } else {
                html += `<div class="flow-node-meta">Insufficient data to evaluate</div>`;
            }
            html += `</div></div>`;
        }
    });

    // --- END node ---
    html += `<div class="flow-connector"><div class="line"></div><div class="arrow"></div></div>`;
    html += `<div class="flow-node end">
        <div class="flow-node-inner">
            <div class="flow-node-title"><i class="fas fa-flag-checkered"></i>&nbsp; SEP Course Completed</div>
            <div class="flow-node-meta">Review overall QC data and plan next cycle</div>
        </div>
    </div>`;

    canvas.innerHTML = html;
}

function renderFlowchartInsights(stepMetrics, evaluations) {
    const container = document.getElementById('flowchartInsights');
    const cards = [];

    // Bottlenecks
    const bottlenecks = stepMetrics.filter(s => s.avgScore !== null && s.avgScore < 50);
    if (bottlenecks.length > 0) {
        cards.push({
            type: 'bottleneck',
            icon: 'fa-exclamation-circle',
            title: `${bottlenecks.length} Bottleneck${bottlenecks.length > 1 ? 's' : ''} Detected`,
            text: bottlenecks.map(b => `<strong>${b.title}</strong> (${b.avgScore}%)`).join(', ') + ' — these stages are slowing down or going wrong and need immediate corrective action.'
        });
    }

    // Warning areas
    const warnings = stepMetrics.filter(s => s.avgScore !== null && s.avgScore >= 50 && s.avgScore < 65);
    if (warnings.length > 0) {
        cards.push({
            type: 'warning',
            icon: 'fa-exclamation-triangle',
            title: `${warnings.length} Area${warnings.length > 1 ? 's' : ''} Need Attention`,
            text: warnings.map(w => `<strong>${w.title}</strong> (${w.avgScore}%)`).join(', ') + ' — approaching risk levels, monitor closely.'
        });
    }

    // Strong areas
    const strong = stepMetrics.filter(s => s.avgScore !== null && s.avgScore >= 80);
    if (strong.length > 0) {
        cards.push({
            type: 'success',
            icon: 'fa-check-circle',
            title: `${strong.length} Strong Area${strong.length > 1 ? 's' : ''}`,
            text: strong.map(s => `<strong>${s.title}</strong> (${s.avgScore}%)`).join(', ') + ' — performing excellently. Maintain these standards.'
        });
    }

    // Missing data
    const missing = stepMetrics.filter(s => s.avgScore === null);
    if (missing.length > 0) {
        cards.push({
            type: 'info',
            icon: 'fa-info-circle',
            title: `${missing.length} Area${missing.length > 1 ? 's' : ''} Missing QC Data`,
            text: missing.map(m => `<strong>${m.title}</strong> (${m.qcTypes.map(t => getQCTypeDisplayName(t)).join(', ')})`).join(', ') + ' — complete the relevant QC evaluations to fill these gaps in the flowchart.'
        });
    }

    // Declining trends
    const declining = stepMetrics.filter(s => s.trend === 'declining');
    if (declining.length > 0) {
        cards.push({
            type: 'bottleneck',
            icon: 'fa-arrow-down',
            title: `${declining.length} Declining Trend${declining.length > 1 ? 's' : ''}`,
            text: declining.map(d => `<strong>${d.title}</strong> (${d.avgScore}%)`).join(', ') + ' — quality is dropping over time. Investigate root causes.'
        });
    }

    // Week coverage analysis
    const weekCoverage = new Set();
    evaluations.forEach(e => {
        if (e.basicInfo?.courseWeek) weekCoverage.add(parseInt(e.basicInfo.courseWeek));
    });
    const coveredWeeks = weekCoverage.size;
    if (coveredWeeks > 0 && coveredWeeks < 12) {
        const missingWeeks = [];
        for (let w = 1; w <= 12; w++) {
            if (!weekCoverage.has(w)) missingWeeks.push('W' + w);
        }
        cards.push({
            type: 'info',
            icon: 'fa-calendar-alt',
            title: `Week Coverage: ${coveredWeeks}/12 Weeks`,
            text: `QC data exists for ${coveredWeeks} out of 12 course weeks. Missing: <strong>${missingWeeks.join(', ')}</strong>. Ensure regular QC across all weeks.`
        });
    }

    // Overall flow health
    const scored = stepMetrics.filter(s => s.avgScore !== null);
    if (scored.length > 0) {
        const overallAvg = Math.round(scored.reduce((sum, s) => sum + s.avgScore, 0) / scored.length);
        const health = overallAvg >= 80 ? 'Excellent' : overallAvg >= 65 ? 'Good' : overallAvg >= 50 ? 'Average' : 'Needs Improvement';
        const coverage = Math.round((scored.length / stepMetrics.length) * 100);
        cards.push({
            type: overallAvg >= 65 ? 'success' : overallAvg >= 50 ? 'warning' : 'bottleneck',
            icon: 'fa-heartbeat',
            title: `Overall Process Health: ${health}`,
            text: `The SEP course process is running at <strong>${overallAvg}%</strong> overall across ${evaluations.length} evaluations. Process coverage: <strong>${coverage}%</strong> (${scored.length}/${stepMetrics.length} steps have data). ${overallAvg < 65 ? 'Focus on the bottleneck areas to improve flow.' : 'Keep up the quality standards.'}`
        });
    }

    container.innerHTML = cards.map(c => `
        <div class="insight-card ${c.type}">
            <h4><i class="fas ${c.icon}"></i> ${c.title}</h4>
            <p>${c.text}</p>
        </div>
    `).join('');
}

function closeFlowchart() {
    document.getElementById('flowchartSection').style.display = 'none';
}