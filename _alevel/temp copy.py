import cupy as cp
import matplotlib.pyplot as plt
from matplotlib.colors import LinearSegmentedColormap

# Zoom parameters for seahorse tail
xmin, xmax = -0.746, -0.742
ymin, ymax = 0.129, 0.1325
width, height = 1200, 1200
max_iter = 2000

# Create grid with cupy
x = cp.linspace(xmin, xmax, width)
y = cp.linspace(ymin, ymax, height)
X, Y = cp.meshgrid(x, y)
C = X + 1j*Y
Z = cp.zeros_like(C)
iterations = cp.zeros(C.shape, dtype=cp.float32)

# Smooth escape time
for i in range(max_iter):
    mask = cp.abs(Z) <= 2
    Z[mask] = Z[mask]**2 + C[mask]
    newly_diverged = mask & (cp.abs(Z) > 2)
    iterations[newly_diverged] = i + 1 - cp.log2(cp.log2(cp.abs(Z[newly_diverged])))

# Transfer back to CPU for plotting
iterations_np = iterations.get()

# Bright purple colormap for shining effect
colors = [(0.05, 0.0, 0.1),   # dark purple
          (0.5, 0.0, 0.7),    # medium bright purple
          (0.8, 0.3, 1.0),    # bright purple
          (1.0, 0.7, 1.0)]    # glowing lavender
cmap = LinearSegmentedColormap.from_list("bright_purple", colors, N=1024)

plt.figure(figsize=(8,8), facecolor=(0.05,0.02,0.1))
plt.imshow(iterations_np, extent=[xmin, xmax, ymin, ymax], cmap=cmap, origin="lower")
plt.axis("off")
plt.title("Mandelbrot Set – Seahorse Tail (Bright)", color="white")
plt.savefig("mandelbrot_seahorse_tail_bright.png", facecolor=(0.05,0.02,0.1), dpi=300, bbox_inches="tight")
plt.show()