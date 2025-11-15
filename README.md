## Animating Content on Viewport Entry

The `IntersectionObserver` provides an efficient mechanism for triggering animations when an element scrolls into view.

To ensure the animation is noticeable, the observer’s threshold option is utilized. By setting a specific `threshold` (e.g., `0.25`), the callback is delayed until the element is at least 25% visible, rather than firing as soon as the first pixel appears.

The implementation requires the element to have a predefined CSS `transition` and an initial state (such as `opacity: 0`). When the observer callback executes, it checks the `isIntersecting` property. If `true`, a new style (e.g., `opacity: 1`) is applied, activating the transition.

For performance, the animation is triggered only once. After the style is applied, `observer.unobserve()` is called on the element to stop monitoring it.