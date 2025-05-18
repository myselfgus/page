export const smoothScroll = (targetId: string) => {
  const target = document.getElementById(targetId)
  if (!target) return

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition

  let startTime: number | null = null
  const duration = 1000 // ms

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)

    // Easing function for smoother deceleration
    const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)

    window.scrollTo(0, startPosition + distance * ease(progress))

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}

// Adicionar a função scrollToSection que estava faltando
export const scrollToSection = (sectionId: string) => {
  smoothScroll(sectionId)
}
