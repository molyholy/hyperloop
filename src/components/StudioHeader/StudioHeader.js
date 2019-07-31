import React from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItems,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent
} from "carbon-components-react/lib/components/UIShell";
import UserAvatar20 from "@carbon/icons-react/lib/user--avatar/20";

const StudioHeader = () => (
  <Header aria-label="IBM Watson Studio">
    {/* aria-label is basically for accessibility */}
    <SkipToContent />
    <HeaderName href="/" prefix="IBM">
      Watson Studio
    </HeaderName>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="User Avatar">
        <UserAvatar20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);

export default StudioHeader;
