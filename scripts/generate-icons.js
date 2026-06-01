/**
 * Generates PWA icons matching the in-app card back pattern
 * (sun, moon, four-point star on purple with gold border).
 */
const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const COLORS = {
    back: '#2a1848',
    backInset: '#1f1238',
    gold: '#d4af37',
    goldBright: '#f5e6c8',
};

function drawFourPointStar(ctx, cx, cy, outerR) {
    const innerR = outerR * 0.18;
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
        const angle = -Math.PI / 2 + (i * Math.PI) / 4;
        const r = i % 2 === 0 ? outerR : innerR;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
}

function drawSun(ctx, cx, cy, r) {
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.42, 0, Math.PI * 2);
    ctx.fill();
    const rays = 8;
    for (let i = 0; i < rays; i++) {
        const angle = (i * Math.PI * 2) / rays - Math.PI / 2;
        const x1 = cx + Math.cos(angle) * r * 0.55;
        const y1 = cy + Math.sin(angle) * r * 0.55;
        const x2 = cx + Math.cos(angle) * r;
        const y2 = cy + Math.sin(angle) * r;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = Math.max(1, r * 0.14);
        ctx.lineCap = 'round';
        ctx.stroke();
    }
}

function drawMoon(ctx, cx, cy, r) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(cx + r * 0.42, cy - r * 0.08, r * 0.82, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

function createIcon(size) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    const pad = size * 0.06;
    const radius = size * 0.12;

    ctx.fillStyle = COLORS.back;
    ctx.fillRect(0, 0, size, size);

    const inset = size * 0.08;
    const innerRadius = size * 0.08;
    roundRect(ctx, pad, pad, size - pad * 2, size - pad * 2, radius);
    ctx.fillStyle = COLORS.back;
    ctx.fill();
    ctx.strokeStyle = COLORS.gold;
    ctx.lineWidth = Math.max(2, size * 0.014);
    ctx.stroke();

    roundRect(
        ctx,
        pad + inset,
        pad + inset,
        size - (pad + inset) * 2,
        size - (pad + inset) * 2,
        innerRadius
    );
    ctx.fillStyle = COLORS.backInset;
    ctx.fill();

    const inner = {
        x: pad + inset,
        y: pad + inset,
        w: size - (pad + inset) * 2,
        h: size - (pad + inset) * 2,
    };

    ctx.fillStyle = COLORS.gold;
    ctx.strokeStyle = COLORS.gold;
    ctx.globalAlpha = 0.88;

    const symbolR = size * 0.065;
    const marginX = inner.x + inner.w * 0.18;
    const marginY = inner.y + inner.h * 0.16;
    const rightX = inner.x + inner.w - inner.w * 0.18;
    const bottomY = inner.y + inner.h - inner.h * 0.16;
    const centerX = inner.x + inner.w / 2;
    const centerY = inner.y + inner.h / 2;

    drawSun(ctx, marginX, marginY, symbolR);
    drawMoon(ctx, rightX, marginY, symbolR * 0.95);
    drawFourPointStar(ctx, centerX, centerY, symbolR * 1.35);
    ctx.fill();
    drawMoon(ctx, marginX, bottomY, symbolR * 0.95);
    drawSun(ctx, rightX, bottomY, symbolR);

    ctx.globalAlpha = 1;

    return canvas;
}

function roundRect(ctx, x, y, w, h, r) {
    const radius = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + w - radius, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
    ctx.lineTo(x + w, y + h - radius);
    ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
    ctx.lineTo(x + radius, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}

const root = path.join(__dirname, '..');

for (const size of [192, 512]) {
    const canvas = createIcon(size);
    const outPath = path.join(root, `icon-${size}.png`);
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outPath, buffer);
    console.log(`Wrote ${outPath} (${buffer.length} bytes)`);
}
