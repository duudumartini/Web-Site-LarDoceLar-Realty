const totalSalesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Vendas Totais',
        data: [10, 12, 8, 15, 18, 20, 25, 22, 30, 28, 26, 24],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

const salesByEmployeeData = {
    labels: ['Funcionário A', 'Funcionário B', 'Funcionário C', 'Funcionário D'],
    datasets: [{
        label: 'Vendas',
        data: [35, 40, 20, 50],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Total em R$ por Vendas',
        data: [5000, 7000, 8000, 12000, 15000, 16000, 17000, 18000, 20000, 22000, 24000, 26000],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
    }]
};

const totalRevenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Total de R$ das Vendas',
        data: [6000, 8000, 10000, 14000, 18000, 20000, 22000, 24000, 28000, 30000, 32000, 34000],
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1
    }]
};

// Configurações dos gráficos
const config = {
    type: 'line',
    data: totalSalesData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const config2 = {
    type: 'bar',
    data: salesByEmployeeData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const config3 = {
    type: 'line',
    data: revenueData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const config4 = {
    type: 'line',
    data: totalRevenueData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Renderizando os gráficos
window.onload = function() {
    const ctx1 = document.getElementById('totalSalesChart').getContext('2d');
    new Chart(ctx1, config);

    const ctx2 = document.getElementById('salesByEmployeeChart').getContext('2d');
    new Chart(ctx2, config2);

    const ctx3 = document.getElementById('revenueChart').getContext('2d');
    new Chart(ctx3, config3);

    const ctx4 = document.getElementById('totalRevenueChart').getContext('2d');
    new Chart(ctx4, config4);
};