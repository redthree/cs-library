import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import {
  CornershopPopIcon,
  BlockedIcon,
  CouponsIcon,
  DeliveryIcon,
  DiscontinuedIcon,
  DubiousIcon,
  HelpIcon,
  LogoutIcon,
  OrdersIcon,
  PaymentsIcon,
  PhoneIcon,
  PrivacyIcon,
  ProductsIcon,
  ProfileIcon,
  SeasonUnavailableIcon,
  ShareIcon,
  ShopperIcon,
  StoreIcon,
  WorkWithUsIcon
} from "../../assets/icons/cornershop";

import "./styles.scss";

class CornershopIcon extends PureComponent {
  _renderIcon(type) {
    switch (type) {
      case "cornershop-pop":
        return <CornershopPopIcon />;
      case "blocked":
        return <BlockedIcon />;
      case "coupons":
        return <CouponsIcon />;
      case "delivery":
        return <DeliveryIcon />;
      case "discontinued":
        return <DiscontinuedIcon />;
      case "dubious":
        return <DubiousIcon />;
      case "help":
        return <HelpIcon />;
      case "logout":
        return <LogoutIcon />;
      case "orders":
        return <OrdersIcon />;
      case "payments":
        return <PaymentsIcon />;
      case "phone":
        return <PhoneIcon />;
      case "privacy":
        return <PrivacyIcon />;
      case "products":
        return <ProductsIcon />;
      case "profile":
        return <ProfileIcon />;
      case "season-unavailable":
        return <SeasonUnavailableIcon />;
      case "share":
        return <ShareIcon />;
      case "shopper":
        return <ShopperIcon />;
      case "store":
        return <StoreIcon />;
      case "work-with-us":
        return <WorkWithUsIcon />;
      default:
        return (
          <span role="img" aria-label="facepalm">
            {" "}
            🤦‍
          </span>
        );
    }
  }

  render() {
    const { type, size = 100 } = this.props;
    const finalSize =
      size && size > 29
        ? { width: size + "px", height: size + "px" }
        : { width: "100px", height: "100px" };

    return (
      <span
        className={"cs-cornershop-icon-container cs-icon-" + type}
        style={finalSize}
      >
        {this._renderIcon(type)}
      </span>
    );
  }
}

CornershopIcon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number
};

export default CornershopIcon;
