import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { MdHeight } from 'react-icons/md';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
    // Data for the sales graph
    const salesData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Museum of Illusions Ticket Sales',
                data: [300, 450, 400, 500, 620, 780], // Sales data points
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                tension: 0.4, // Smooth curve
                fill: true,
            },
        ],
    };

    const salesOptions = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Sales ($)',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Months',
                },
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Museum of Illusions Ticket Sales (2024)',
            },
        },
    };

    return (
        <div style={dashboardStyles.wrapper}>
            {/* Main Content */}
            <div style={dashboardStyles.mainContent}>
                <h2 style={{ fontSize: '3rem', margin: '1rem' }}>Overview</h2>
                <div style={dashboardStyles.cardsWrapper}>
                    {/* Museum Stats Card */}
                    <div style={dashboardStyles.card}>
                        <h4>Total Museums</h4>
                        <p>15</p>
                    </div>

                    {/* Ticket Sales Card */}
                    <div style={dashboardStyles.card}>
                        <h4>Ticket Sales</h4>
                        <p>$3,200</p>
                    </div>

                    {/* Offers Active */}
                    <div style={dashboardStyles.card}>
                        <h4>Active Offers</h4>
                        <p>5</p>
                    </div>

                    {/* Visitors Stats */}
                    <div style={dashboardStyles.card}>
                        <h4>Total Visitors</h4>
                        <p>1,200</p>
                    </div>
                </div>

                {/* Sales Graph for Museum of Illusions */}
                <div style={dashboardStyles.graphWrapper}>
                    <h3>Sales Report - Museum of Illusions</h3>
                    <Line data={salesData} options={salesOptions} />
                </div>
            </div>
        </div>
    );
};

// Dashboard styles
const dashboardStyles = {
    wrapper: {
        display: 'flex',
        width: '100%'
    },
    mainContent: {
        flex: 1,
        padding: '20px',
    },
    cardsWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
    },
    card: {
        flex: '1 1 calc(25% - 20px)', // Adjust width and gap as needed
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    graphWrapper: {
        marginTop: '40px',
        height:'25rem'
    }
};

export default Dashboard;
