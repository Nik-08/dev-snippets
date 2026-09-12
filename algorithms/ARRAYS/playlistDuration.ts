function playlistDuration(playlist: string[][]) {
	const totalSeconds = playlist.reduce((sum, [, time])=> {
		const parts = time.split(":").map(Number);
		const seconds = parts.length === 3 ? parts[0] * 3600 + parts[1] * 60 + parts[2] : parts[0] * 60 + parts[1]
		
		return sum + seconds;
	}, 0);


    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

		const pad = (n: number) => String(n).padStart(2, '0');

		return h > 0 ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`

}
