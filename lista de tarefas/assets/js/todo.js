//230. Trabalhando com Array
//231. Percorrendo Array com ForEach
//232. Manipulando Classes CSS
//233. Manipulando Eventos de Teclado
//234. Adicionando Elementos em um Array com Push
//235. Adicionando Botão para Excluir Tarefa
//236. Convertendo em String com a Função Split
//237. Filtrando Elementos em um Array com Array Filter
//238. Utilizando Janelas de Confirmação com Confirm

let data = [];

function renderTodo() {

    document.querySelector('.todo').innerHTML = '';

    data.forEach(task => {

        let li = document.createElement('li');

        li.innerHTML = `
            <input type="checkbox" id="task-${task.id}">
            <label for="task-${task.id}">${task.title}</label>
            <button type="button">x</button>
        `;

        li.querySelector('input').addEventListener("change", e => {
            
            if (e.target.checked) {
                li.classList.add('complete');
            } else {
                li.classList.remove('complete');
            }

        });

        li.querySelector('button').addEventListener('click', e => {

           let button = e.target;
           let li = button.parentNode;
           let input = li.querySelector('input');
           let id = input.id;
           let idArray = id.split('-');
           let todoId = idArray[1];
           let title = li.querySelector('label').innerText;

           if (confirm(`Deseja excluir a tarefa "${title}"?`)) {

                data = data.filter(task => task.id !== parseInt(todoId));

                renderTodo();

           }

        });

        document.querySelector('.todo').append(li);

    });

}

document.querySelector('#new-task').addEventListener('keyup', e => {

    if (e.key === 'Enter') {

        data.push({
            id: data.length+1,
            title: e.target.value
        });

        title: e.target.value = "";

        renderTodo();
    }

});

renderTodo();