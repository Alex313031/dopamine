import { AlbumData } from '../entities/album-data';
import { GenreData } from '../entities/genre-data';
import { Track } from '../entities/track';

export abstract class BaseTrackRepository {
    public abstract getNumberOfTracksThatNeedIndexing(): number;
    public abstract getNumberOfTracks(): number;
    public abstract getMaximumDateFileModified(): number;
    public abstract getNumberOfTracksThatDoNotBelongFolders(): number;
    public abstract deleteTracksThatDoNotBelongFolders(): number;
    public abstract deleteTrack(trackId: number): void;
    public abstract getAllTracks(): Track[];
    public abstract getAlbumTracks(albumKeys: string[]): Track[];
    public abstract getGenreTracks(genres: string[]): Track[];
    public abstract getArtistTracks(artists: string[]): Track[];
    public abstract getAlbumArtistTracks(albumArtists: string[]): Track[];
    public abstract updateTrack(track: Track): void;
    public abstract addTrack(track: Track): void;
    public abstract getTrackByPath(path: string): Track;
    public abstract getAlbumDataThatNeedsIndexing(): AlbumData[];
    public abstract getAllAlbumData(): AlbumData[];
    public abstract getGenreData(): GenreData[];
    public abstract getLastModifiedTrackForAlbumKeyAsync(albumKey: string): Track;
    public abstract disableNeedsAlbumArtworkIndexingAsync(albumKey: string): void;
    public abstract enableNeedsAlbumArtworkIndexingForAllTracks(onlyWhenHasNoCover: boolean): void;
}
