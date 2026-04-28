        function openModal(btnEl, titleStr) {
            const contentHtml = btnEl.nextElementSibling.innerHTML;
            document.getElementById('modal-title').innerText = titleStr;
            document.getElementById('modal-body').innerHTML = contentHtml;
            document.getElementById('api-modal').showModal();
        }
