document.addEventListener("mousemove", function(e) {
  const x = e.clientX;
  const y = e.clientY;

  // Create a radial gradient at the cursor position (~2 cm radius)
  document.body.style.setProperty(
    "--cursor-gradient",
    `radial-gradient(circle 80px at ${x}px ${y}px, rgba(0,123,255,0.4), transparent 80%)`
  );
});
