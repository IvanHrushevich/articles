import webpack from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('ts', 'tsx');

    if (config.module?.rules) {
        config.module.rules = config.module.rules.map((rule: any) => {
            if (rule?.test && /svg/.test(rule.test as any)) {
                return {...rule, exclude: /\.svg$/i}
            }
    
            return rule;
        });

        const svgLoader = {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        };

        config.module.rules.push(svgLoader);
        config.module.rules.push(buildCssLoader(true));
    }

    return config;
};
