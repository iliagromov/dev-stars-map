interface CelestialDataItem {
  file: string;
  type: 'json' | 'raw';
  // callback: Function;
  // redraw: Function;
  // save: Function;
}

interface CelestialConfigPlanetSymbolParams {
  /**  */
  symbol: string;

  letter: string;

  fill: string;
}

interface CelestialConfigLinesParams {
  show: boolean;
  stroke: string;
  width: number;
  opacity: number;
}

declare module 'd3-celestial/celestial' {
  export interface CelestialConfig {
    /** Default width; height is determined by projection */
    width: number;

    /** Map projection (default: 'aitoff') */
    projection: 'airy' | 'aitoff' | 'armadillo' | 'august' | 'azimuthalEqualArea'
      | 'azimuthalEquidistant' | 'baker' | 'berghaus' | 'boggs' | 'bonne' | 'bromley' | 'collignon'
      | 'craig' | 'craster' | 'cylindricalEqualArea' | 'cylindricalStereographic' | 'eckert1'
      | 'eckert2' | 'eckert3' | 'eckert4' | 'eckert5' | 'eckert6' | 'eisenlohr' | 'equirectangular'
      | 'fahey' | 'foucaut' | 'ginzburg4' | 'ginzburg5' | 'ginzburg6' | 'ginzburg8' | 'ginzburg9'
      | 'gringorten' | 'hammer' | 'hatano' | 'healpix' | 'hill' | 'homolosine' | 'kavrayskiy7'
      | 'lagrange' | 'larrivee' | 'laskowski' | 'loximuthal' | 'mercator' | 'miller' | 'mollweide'
      | 'mtFlatPolarParabolic' | 'mtFlatPolarQuartic' | 'mtFlatPolarSinusoidal' | 'naturalEarth'
      | 'nellHammer' | 'orthographic' | 'patterson' | 'polyconic' | 'rectangularPolyconic'
      | 'robinson' | 'sinusoidal' | 'stereographic' | 'times' | 'twoPointEquidistant'
      | 'vanDerGrinten' | 'vanDerGrinten2' | 'vanDerGrinten3' | 'vanDerGrinten4' | 'wagner4'
      | 'wagner6' | 'wagner7' | 'wiechel' | 'winkel3';

    /** Coordinate transformation (default: 'equatorial') */
    transform: 'equatorial' | 'ecliptic' | 'galactic' | 'supergalactic';

    /**
     * Initial center coordinates in equatorial transformation [hours, degrees, degrees], otherwise
     * [degrees, degrees, degrees], 3rd parameter is orientation, null = default center
     */
    center: [number, number, number];

    /** Optional initial geographic position [lat,lon] in degrees, overrides center */
    geopos: [number, number];

    /**
     * On which coordinates to center the map, default: zenith, if location enabled, otherwise
     * center (default: 'zenith')
     */
    follow: 'zenith' | 'center';

    /** Keep orientation angle the same as center[2] (default: true) */
    orientationfixed: boolean;

    /** Initial zoom level 0...zoomextend; 0|null = default, 1 = 100%, 0 < x <= zoomextend */
    zoomlevel: number;

    /** Maximum zoom level (default: 10) */
    zoomextend: number;

    /** Sizes are increased with higher zoom-levels (default: true) */
    adaptable: boolean;

    /** Enable zooming and rotation with mousewheel and dragging (default: true) */
    interactive: boolean;

    /** Display settings form (default: false) */
    form: boolean;

    /** Display location settings, deprecated, use formFields (default: false) */
    location: boolean;

    /** Set visiblity for each group of fields of the form */
    formFields: Partial<{
      /** default: true */
      location: boolean;

      /** default: true */
      general: boolean;

      /** default: true */
      stars: boolean;

      /** default: true */
      dsos: boolean;

      /** default: true */
      constellations: boolean;

      /** default: true */
      lines: boolean;

      /** default: true */
      other: boolean;

      /** default: false */
      download: boolean;
    }>;

    /** Display fewer form fields if false (default: true) */
    advanced: boolean;

    /**
     * Calender date range; null: displaydate-+10; [n<100]: displaydate-+n; [yr]: yr-+10;
     * [yr, n<100]: [yr-n, yr+n]; [yr0, yr1]
     */
    daterange: [number?, number?];

    /**
     * Display zoom controls (default: true)
     */
    controls: boolean;

    /**
     * Global language override for names, any name setting that has the chosen language available
     * Default: desig or empty string for designations, other languages as used anywhere else
     */
    lang: string;

    /** Constellation lines (default: 'iau') */
    culture: 'iau';

    /** ID of parent element (default: 'celestial-map') */
    container: string;

    /** Path/URL to data files (default: 'data/') */
    datapath: string;

    stars: Partial<{
      /** Show stars */
      show: boolean;

      /** Show only stars brighter than limit magnitude */
      limit: number;

      /** Show stars in spectral colors, if not use fill-style */
      colors: boolean;

      /** Default style for stars */
      style: Partial<{
        fill: string;
        opacity: number;
      }>;

      /**
       * Show star names (Bayer, Flamsteed, Variable star, Gliese or designation, i.e. whichever
       * of the previous applies first); may vary with culture setting
       */
      designation: boolean;

      /** Which kind of name is displayed as designation (fieldname in starnames.json) */
      designationType: 'name' | 'bayer' | 'flam' | 'var' | 'gl' | 'hd' | 'hip' | 'c' | 'desig';

      designationStyle: {
        fill: string;
        font: string;
        align: 'left' | 'right' | 'center';
        baseline: 'top' | 'middle' | 'bottom';
      };

      /** Show only names for stars brighter than nameLimit */
      designationLimit: number;

      /** Show proper name (if present) */
      propername: boolean;

      /** Field in starnames.json that contains proper name; may vary with culture setting */
      propernameType: string;

      propernameStyle: Record<string, string | number>;

      /** Show proper names for stars brighter than propernameLimit */
      propernameLimit: number;

      /** Scale size (radius) of star circle in pixels */
      size: number;

      /** Scale exponent for star size, larger = more linear */
      exponent: number;

      /** Data source for stellar data */
      data: string;
    }>;

    dsos: Partial<{
      /** Show Deep Space Objects */
      show: boolean;

      /** Show only DSOs brighter than limit magnitude */
      limit: number;

      /** Show DSOs in symbol colors if true, use style setting below if false */
      colors: boolean;

      /** Default style for dsos */
      style: Record<string, string | number>;

      /** Show DSO names */
      names: boolean;

      /** Type of displayed name: desig, name, or 15 different language codes from dsonames.json */
      namesType: string;

      nameStyle: Record<string, string | number>;

      /** Show only names for DSOs brighter than nameLimit */
      nameLimit: number;

      /** Optional seperate scale size for DSOs, null = stars.size */
      size: number;

      /** Scale exponent for DSO size, larger = more non-linear */
      exponent: number;

      /** Data source for DSOs */
      data: string;

      /** DSO symbol styles */
      symbols: Partial<{
        /** Galaxy cluster */
        gg: Record<string, string | number>;

        /** Generic galaxy */
        g: Record<string, string | number>;

        /** Spiral galaxy */
        s: Record<string, string | number>;

        /** Lenticular galaxy */
        s0: Record<string, string | number>;

        /** Dwarf galaxy */
        sd: Record<string, string | number>;

        /** Elliptical galaxy */
        e: Record<string, string | number>;

        /** Irregular galaxy */
        i: Record<string, string | number>;

        /** Open cluster */
        oc: Record<string, string | number>;

        /** Globular cluster */
        gc: Record<string, string | number>;

        /** Emission nebula */
        en: Record<string, string | number>;

        /** Generic bright nebula */
        bn: Record<string, string | number>;

        /** Star forming region */
        sfr: Record<string, string | number>;

        /** Reflection nebula */
        rn: Record<string, string | number>;

        /** Planetary nebula */
        pn: Record<string, string | number>;

        /** Supernova remnant */
        snr: Record<string, string | number>;

        /** Dark nebula */
        dn: Record<string, string | number>;

        /** Generic marker */
        pos: Record<string, string | number>;
      }>;
    }>;

    constellations: Partial<{
      /** Show constellations */
      show: boolean;

      /** Show constellation names */
      names: boolean;

      /**
       * What kind of name to show (default 3 letter designations)
       */
      namesType: 'name' | 'desig' | 'lat' | 'en' | 'ar' | 'cn' | 'cz' | 'ee' | 'fi' | 'fr' | 'de'
        | 'gr' | 'il' | 'it' | 'jp' | 'kr' | 'in' | 'ir' | 'ru' | 'es' | 'tr';

      nameStyle: Record<string, string | number | string[]>;

      /** Show constellation lines */
      lines: boolean;

      lineStyle: Record<string, string | number>;

      /** Show constellation boundaries */
      bounds: boolean;

      boundStyle: Record<string, string | number | number[]>;
    }>;

    mw: Partial<{
      /** Show Milky Way as filled polygons */
      show: boolean;

      /** Style for each MW-layer (5 on top of each other) */
      style: Record<string, string | number>;
    }>;

    lines: Partial<{
      graticule: {
        /** grid values: "outline", "center", or [lat,...] specific position */
        lon?: {
          pos: string[];
          fill: string;
          font: string;
        };

        /** grid values: "outline", "center", or [lat,...] specific position */
        lat?: {
          pos: string[];
          fill: string;
          font: string;
        };
      } & Partial<CelestialConfigLinesParams>;

      equatorial: Partial<CelestialConfigLinesParams>;
      ecliptic: Partial<CelestialConfigLinesParams>;
      galactic: Partial<CelestialConfigLinesParams>;
      supergalactic: Partial<CelestialConfigLinesParams>;
    }>;

    /** Background style */
    background: Partial<{
      fill: string;
      opacity: number;
      /** Outline */
      stroke: string;
      width: number;
    }>;

    /** Show horizon marker, if geo-position and date-time is set */
    horizon: Partial<{
      show: boolean;

      /** Line */
      stroke: string;

      width: number;

      /** Area below horizon */
      fill: string;

      opacity: number;
    }>;

    /** Show approximate state of sky at selected time */
    daylight: {
      show: boolean;
    };

    planets: Partial<{
      show: boolean;

      which: [
        'sol'?,
        'mer'?,
        'ven'?,
        'ter'?,
        'lun'?,
        'mar'?,
        'jup'?,
        'sat'?,
        'ura'?,
        'nep'?,
        'cer'?,
        'plu'?,
      ];

      symbols: Partial<{
        sol: CelestialConfigPlanetSymbolParams;
        mer: CelestialConfigPlanetSymbolParams;
        ven: CelestialConfigPlanetSymbolParams;
        ter: CelestialConfigPlanetSymbolParams;
        lun: CelestialConfigPlanetSymbolParams;
        mar: CelestialConfigPlanetSymbolParams;
        cer: CelestialConfigPlanetSymbolParams;
        ves: CelestialConfigPlanetSymbolParams;
        jup: CelestialConfigPlanetSymbolParams;
        sat: CelestialConfigPlanetSymbolParams;
        ura: CelestialConfigPlanetSymbolParams;
        nep: CelestialConfigPlanetSymbolParams;
        plu: CelestialConfigPlanetSymbolParams;
        eri: CelestialConfigPlanetSymbolParams;
      }>;

      /** Style options for planetary symbols */
      symbolStyle: Record<string, string | number>;

      /** Type of planetary symbol to be displayed */
      symbolType: 'symbol' | 'letter' | 'disk';

      /** Show name next to symbol */
      names: boolean;

      /** Style options for planetary names */
      nameStyle: Record<string, string | number>;

      /** Language in which the name is displayed */
      namesType: 'desig' | 'ar' | 'cn' | 'en' | 'fr' | 'de' | 'gr' | 'il' | 'in' | 'it' | 'jp'
        | 'lat' | 'ru' | 'es';
    }>;
  }

  export class Celestial {
    version: string;

    container: HTMLElement;

    data: CelestialDataItem[];

    display: (config: CelestialConfig) => void;
  }
}
