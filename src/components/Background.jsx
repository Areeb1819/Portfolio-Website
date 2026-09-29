import { useEffect, useRef } from 'react'

/* Fixed page background.
 *
 * Two parts:
 *  1. A static CSS gradient in the brand colours (always visible).
 *  2. Any images placed in src/assets/backgrounds/ are stacked on top as
 *     parallax layers and drift at different speeds while you scroll.
 *
 * Images are picked up automatically — you only need to drop files into that
 * folder, no import changes required. Layers are ordered by a number at the
 * start of the filename, so 1-hero.jpg sits behind 2-mid.jpg.
 */

const imageModules = import.meta.glob(
  '../assets/backgrounds/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, query: '?url', import: 'default' },
)

const LAYERS = Object.entries(imageModules)
  .map(([path, url]) => ({
    url,
    depth: Number(/(\d+)/.exec(path.split('/').pop())?.[1] ?? 1) || 1,
  }))
  .sort((a, b) => a.depth - b.depth)
  .map((layer, index) => ({
    ...layer,
    /* The first image moves the most, the later ones move less, so the stack
       has real depth instead of everything sliding as one flat block. */
    shift: 30 - index * 5,
    opacity: 0.62 - index * 0.1,
    size: 122 + index * 18,
  }))

const clamp01 = (n) => (n < 0 ? 0 : n > 1 ? 1 : n)

function Background() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    const layers = [...root.querySelectorAll('.bg-layer')]
    const glowA = root.querySelector('.bg-glow-a')
    const glowB = root.querySelector('.bg-glow-b')
    const grid = root.querySelector('.bg-grid')

    let frame = 0

    const render = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? clamp01(window.scrollY / max) : 0

      /* Parallax: each layer drifts up at its own speed as you scroll. */
      layers.forEach((layer) => {
        const shift = Number(layer.dataset.shift)
        layer.style.transform = `translate3d(0, ${-p * shift}%, 0) scale(1.04)`
      })

      /* Accent glows drift slowly and cross-fade for a bit of life. */
      glowA.style.transform = `translate3d(${p * 8}%, ${-p * 10}%, 0)`
      glowB.style.transform = `translate3d(${-p * 12}%, ${p * 6}%, 0)`
      glowB.style.opacity = String(0.75 - p * 0.2)

      /* The grid fades away as you scroll so it never fights the text. */
      grid.style.opacity = String(0.6 - p * 0.45)

      document.documentElement.style.setProperty('--scroll-progress', p)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }

    render()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={rootRef} className="bg-root" aria-hidden="true">
      <div className="bg-base" />

      <div className="bg-grid" />

      <div className="bg-glow bg-glow-a" />
      <div className="bg-glow bg-glow-b" />

      {LAYERS.map((layer, index) => (
        <div
          key={layer.url}
          className="bg-layer"
          data-shift={layer.shift}
          style={{
            backgroundImage: `url("${layer.url}")`,
            height: `${layer.size}%`,
            opacity: layer.opacity,
            zIndex: 3 + index,
          }}
        />
      ))}

      <div className="bg-vignette" />
      <div className="bg-grain" />
    </div>
  )
}

export default Background
