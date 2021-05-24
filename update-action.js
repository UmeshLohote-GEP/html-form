(() => {
    const updateForm = (event) => {
        const form = document.getElementById('form');
        form.action = event.target.value || form.action;
    }
    document.getElementById('url').addEventListener('input', updateForm);
})();
