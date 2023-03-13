document.addEventListener('DOMContentLoaded', () => {
    const codeBlock = document.getElementById('code');
    const copyButton = document.getElementById('copy-btn');
    const copySuccess = document.getElementById('copy-success');

    const copyTextHandler = () => {
        const text = codeBlock.innerText;

        //var element = document.createElement('textarea');
        //document.body.appendChild(element);
        //element.value = text;
        //element.select();
        //document.execCommand('copy');
        //document.removeChild('element');
        //
        //copySuccess.classList.add('show-message');
        //
        //setTimeout(() => {
        //    copySuccess.classList.remove('show-message');
        //});

        navigator.clipboard.writeText(text).then(() => {
            copySuccess.classList.add('show-message');
            
            setTimeout(() => {
                copySuccess.classList.remove('show-message');
            }, 2500)
        });
    };

    // copyButton.addEventListener('click', copyTextHandler)


})