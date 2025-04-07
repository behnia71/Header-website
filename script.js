document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button')
  const tabPanels = document.querySelectorAll('.tab-panel')

  // بررسی وجود عناصر قبل از ادامه کار
  if (tabButtons.length === 0 || tabPanels.length === 0) {
    console.warn('عناصر تب پیدا نشدند.')
    return
  }

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {

      const targetId = button.getAttribute('data-target'); // مثلاً '#android-content'
      const targetPanel = document.querySelector(targetId)

      // اگر پنل هدف وجود ندارد، خارج شو
      if (!targetPanel) {
        console.error(`پنل با آی‌دی ${targetId} یافت نشد.`)
        return
      }

      // 1. غیرفعال کردن همه دکمه‌ها و پنل‌ها
      tabButtons.forEach(btn => btn.classList.remove('active'))
      tabPanels.forEach(panel => panel.classList.remove('active'))

      // 2. فعال کردن دکمه کلیک شده و پنل مربوطه
      button.classList.add('active')
      targetPanel.classList.add('active')
      const icon = button.querySelector('i')

      // اضافه کردن کلاس انیمیشن
      icon.classList.add('icon-shrink')

      // حذف کلاس بعد از اتمام انیمیشن
      icon.addEventListener('animationend', function () {
        icon.classList.remove('icon-shrink')
      }, { once: true })
    })
  })

  // تنظیم اولیه: اطمینان از نمایش تب پیش‌فرض (اگر در HTML مشخص نشده باشد)
  // معمولاً نیازی نیست چون در HTML کلاس .active را گذاشته‌ایم.
  // const initialActiveButton = document.querySelector('.tab-button.active')
  // if (initialActiveButton) {
  //     const initialTargetId = initialActiveButton.getAttribute('data-target')
  //     const initialPanel = document.querySelector(initialTargetId)
  //     if (initialPanel) {
  //         initialPanel.classList.add('active')
  //     }
  // } else if (tabButtons.length > 0) {
  //     // اگر هیچ دکمه‌ای فعال نبود، اولین دکمه را فعال کن (Fallback)
  //     tabButtons[0].click()
  // }

})
