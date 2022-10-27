const MESES = [
               'Enero',
               'febrero',
               'marzo',
               'Abril',
               'Mayo',
               'Junio',
               'Julio',
               'Agosto',
               'Setiembre',
               'Octubre',
               'Noviembre',
               'Diciembre'
];

MESES.forEach(mes => {
    var column = document.createElement('div');
        column.classList.add('column', 'col-4');

    var h3 = document.createElement('h3');
        h3.classList.add('bg-primary', 'cuadro');
        h3.textContent = mes;
    
     column.appendChild(h3);
     document.getElementById('contenido').appendChild(column);   
})