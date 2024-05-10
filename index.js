const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.25 }
) // Fires when element become 25% visible

document.querySelectorAll('.animate').forEach((element) => {
  observer.observe(element)
})
