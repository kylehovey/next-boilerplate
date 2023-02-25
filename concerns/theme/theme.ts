import { ThemeOverride, extendTheme } from "@chakra-ui/react";

import colors from "./colors";

const override: ThemeOverride = { colors };

const theme = extendTheme(override);

export default theme;
