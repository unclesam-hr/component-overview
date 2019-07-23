import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverview: false,
      showDetails: false,
      showShipping: false,
      overviewActive: false,
      detailsActive: false,
      shippingActive: false
    }
  }

  handleClick = (e) => {
    if (e.target.textContent === "OVERVIEW") {
      this.setState({
        overviewActive: !this.state.overviewActive,
        detailsActive: false,
        shippingActive: false,
      });
    } else if (e.target.textContent === "DETAILS + DIMENSIONS") {
      this.setState({
        overviewActive: false,
        detailsActive: !this.state.detailsActive,
        shippingActive: false
      });
    } else if (e.target.textContent === "SHIPPING + RETURNS") {
      this.setState({
        overviewActive: false,
        detailsActive: false,
        shippingActive: !this.state.shippingActive
      });
    }
  }

  render() {
    return (
      <div id="overview-main">
        <div>
          <button onClick={this.handleClick} className={this.state.overviewActive ? 'collapsible overview active': 'collapsible overview'}>OVERVIEW</button>
            <div className={this.state.overviewActive ? 'modalcontent content-show': 'modalcontent content-hide'}>
              <p></p>
              <p>Upholstered in your choice of leather, our Carlo Mid-Century Chair echoes the dramatic, expressive lines of Italian mid-century design. We gave it a slightly pitched back, angled arms and plush cushions that sit within the frame to deliver tons of comfort without the bulk.</p>
              <h4>KEY DETAILS</h4>
              <ul>
                <li>This contract-grade item is manufactured to meet the demands of commercial use in addition to residential. <a href="">See more.</a></li>
                <li>28"w x 30"d x 34"h.</li>
                <li>Leather upholstery.</li>
                <li>Solid pine and engineered hardwood frame with reinforced joinery.</li>
                <li>All wood is kiln-dried to prevent warping.</li>
                <li>Cast metal legs in a Brass finish.</li>
                <li>Webbed seat and back support.</li>
                <li>Seat cushion has fiber-wrapped, high-resiliency polyurethane foam core.</li>
                <li>Back cushion is fiber filled.</li>
                <li>Loose, non-reversible cushions.</li>
                <li>Cushion covers unzip to remove.</li>
                <li>Imported.</li>
              </ul>
            </div>
        </div>
        <div>
          <button onClick={this.handleClick} className={this.state.detailsActive ? 'collapsible details active': 'collapsible details'}>DETAILS + DIMENSIONS</button>
            <div className={this.state.detailsActive ? 'modalcontent content-show': 'modalcontent content-hide'}>
              <p></p>
              <h4>DETAILED SPECIFICATIONS</h4>
              <ul>
                <li>Overall product dimensions: 28"w x 30"d x 34"h.</li>
                <li>Interior seat width: 26".</li>
                <li>Seat depth: 21".</li>
                <li>Seat height: 19.5".</li>
                <li>Back height: 31.5".</li>
                <li>Arm height: 24.75".</li>
                <li>Diagonal depth: 32".</li>
                <li>Clearance: 6".</li>
                <li>Removable legs.</li>
                <li>Loose, non-reversible cushions.</li>
                <li>Cushion covers unzip to remove.</li>
                <li>Imported.</li>
              </ul>
              <h4>PACKAGING</h4>
              <ul>
                <li>Number of boxes: 1.</li>
                <li>Shipping package: 29.25"w x 31"d x 23.6"h.</li>
                <li>Packaged weight: 44 lbs.</li>
              </ul>
              <h4>ASSEMBLY INSTRUCTIONS</h4>
              <ul>
                <li>Assembly required. <a href="">View assembly instructions.</a></li>
              </ul>
              <h4>CARE</h4>
              <p>To minimize drying and cracking, do not place in direct sunlight or near a heat source. Dust and vacuum regularly. Rub out minor scratches lightly with a finger. For oil-based spots and spills, wipe up any excess with a clean, dry cloth. Do not apply water. Rather leave the spot alone. In most cases the spot should dissipate into the leather after a period of time. For permanent stains or thorough cleanings, we recommend contacting a leather specialist. For periodic cleaning and maintenance, we recommend Mohawk Leather Repair Kits (available for purchase in store and online).</p>
            </div>
        </div>
        <div>
        <button onClick={this.handleClick} className={this.state.shippingActive ? 'collapsible active': 'collapsible'}>SHIPPING + RETURNS</button>
          <div className={this.state.shippingActive ? 'modalcontent content-show shipping': 'modalcontent content-hide shipping'}>
            <p></p>
            <h4>FRONT DOOR DELIVERY</h4>
            <p>With Front Door Delivery, your item ships from our Distribution Center by UPS and arrives to your home within 4-5 business days of order receipt.</p>
            <h4>UPS STANDARD DELIVERY + PROCESSING CHARGES</h4>
            <p>The shipping rate varies depending on your order total and shipping options. Visit our Shipping Information Page for more information.</p>
            <p>Add $6 for each gift wrap. For next day delivery, add $26.00 per address. Items shipped directly from the manufacturer and oversized items are not eligible for next day delivery.</p>
            <h4>NEXT DAY DELIVERY + PROCESSING</h4>
            <p>For an extra charge of $26.00 per address, within the contiguous 48 states, we can arrange for next day delivery to most destinations. If we receive your order by 6pm PT Monday through Friday, you'll receive your order the next business day; orders placed on Friday after 6pm PT through Sunday will arrive on Tuesday. Note: Next day delivery service is not available for out-of-stock items, personalized items or for items shipped directly from the vendor.</p>
            <h4>EASY RETURNS</h4>
            <p>You can return eligible items within 30 days of receiving an order or 7 days for Quick Ship upholstery items for a refund of the merchandise value. An original receipt or gift receipt is required. Monogrammed items and Made-to-Order furniture or rugs are not eligible for returns. Review the full list of ineligible items and our refund policy below before starting the process.</p>
              <b>How to return:</b>
              <ul>
                <li>Return to Stores: You can return most non-furniture items to your local west elm store for free.</li>
                <li>UPS: For items under 70 lbs, you can print a return label from our <a href="">Returns Policy</a> page and bring to a UPS location.</li>
                <li>For furniture and other oversized items that are not Made-to-Order, please contact our customer service department at 1.888.922.4119.</li>
              </ul>
              <b>Items not eligible for return:</b>
              <ul>
                <li>Made-to-Order (MTO) items, including custom rugs and furniture</li>
                <li>Drop Ship items, with the exception of wall art</li>
                <li>Mattresses</li>
                <li>Final sale items (with prices ending in $.X7 or $.X9)</li>
                <li>Items damaged through normal wear and tear</li>
              </ul>
            <b>Complete details:</b>
              <ul>
                <li>For full details, please visit our <a>Returns Policy</a> page.</li>
                <li>For further assistance, please call our customer service department at 1.888.922.4119 or send an email to <a>customerservice@westelm.com</a>.</li>
              </ul>
          </div>
        </div>
      </div>
    )
  }
}
