import {flattenVolumeArray} from './assets/flatten-volume-array';
import {MediaAsset} from './assets/types';
import {stringifyFfmpegFilter} from './stringify-ffmpeg-filter';

export const calculateFfmpegFilter = ({
	asset,
	fps,
	durationInFrames,
	channels,
	assetDuration,
}: {
	asset: MediaAsset;
	fps: number;
	durationInFrames: number;
	channels: number;
	assetDuration: number | null;
}): string | null => {
	if (channels === 0) {
		return null;
	}

	const assetTrimLeft = asset.trimLeft / fps;
	const assetTrimRight =
		(asset.trimLeft + asset.duration * asset.playbackRate) / fps;

	return stringifyFfmpegFilter({
		channels,
		startInVideo: asset.startInVideo,
		trimLeft: assetTrimLeft,
		trimRight: assetTrimRight,
		volume: flattenVolumeArray(asset.volume),
		fps,
		playbackRate: asset.playbackRate,
		durationInFrames,
		assetDuration,
	});
};
