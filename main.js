(() => {
    const handleTabClick = (event) => {
        const element = event.target
        if (!element.classList.contains('diploma-tab') || element.classList.contains('active')) {
            return false
        }

        const idTab = element.getAttribute('id')
        if (!idTab) {
            return false
        }

        document.querySelector('.diploma-tab.active')?.classList.remove('active')
        document.querySelector(`.frame-wrapper.active`)?.classList.remove('active')

        element.classList.add('active')
        document.querySelector(`.frame-wrapper#${idTab}-wrapper`)?.classList.add('active')
    }

    document.getElementById('tabs').addEventListener('click', handleTabClick)
    
})()
