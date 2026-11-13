// Rendered on 15 pages.
export default function SiteFooter3() {
	return (
		<div className="fs-cc-prefs2_content">
			<div className="fs-cc-prefs2_space-small">
				<div className="fs-cc-prefs2_title">Privacy Preferences</div>
			</div>
			<div className="fs-cc-prefs2_option">
				<div className="fs-cc-prefs2_toggle-wrapper">
					<div className="fs-cc-prefs2_label">Essential cookies</div>
					<div>Required</div>
				</div>
			</div>
			<div className="fs-cc-prefs2_option">
				<div className="fs-cc-prefs2_toggle-wrapper">
					<div className="fs-cc-prefs2_label">Marketing cookies</div>
					<label className="w-checkbox fs-cc-prefs2_checkbox-field">
						<div className="w-checkbox-input w-checkbox-input--inputType-custom fs-cc-prefs2_checkbox" />
						<input type="checkbox" name="marketing-2" id="marketing-2" fs-cc-checkbox="marketing" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} />
						<span className="fs-cc-prefs2_checkbox-label w-form-label">Essential</span>
						{" "}
					</label>
				</div>
			</div>
			<div className="fs-cc-prefs2_option">
				<div className="fs-cc-prefs2_toggle-wrapper">
					<div className="fs-cc-prefs2_label">Personalization cookies</div>
					<label className="w-checkbox fs-cc-prefs2_checkbox-field">
						<div className="w-checkbox-input w-checkbox-input--inputType-custom fs-cc-prefs2_checkbox" />
						<input type="checkbox" name="personalization-2" id="personalization-2" fs-cc-checkbox="personalization" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} />
						<span className="fs-cc-prefs2_checkbox-label w-form-label">Essential</span>
						{" "}
					</label>
				</div>
			</div>
			<div className="fs-cc-prefs2_option">
				<div className="fs-cc-prefs2_toggle-wrapper">
					<div className="fs-cc-prefs2_label">Analytics cookies</div>
					<label className="w-checkbox fs-cc-prefs2_checkbox-field">
						<div className="w-checkbox-input w-checkbox-input--inputType-custom fs-cc-prefs2_checkbox" />
						<input type="checkbox" name="analytics-2" id="analytics-2" fs-cc-checkbox="analytics" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} />
						<span className="fs-cc-prefs2_checkbox-label w-form-label">Essential</span>
						{" "}
					</label>
				</div>
			</div>
			<div className="fs-cc-prefs2_buttons-wrapper">
				<a fs-cc="deny" href="#" className="fs-cc-prefs2_button fs-cc-button-alt w-button">Reject all cookies</a>
				{" "}
				<a fs-cc="allow" href="#" className="fs-cc-prefs2_button w-button">Allow all cookies</a>
				{" "}
				<a fs-cc="submit" href="#" className="fs-cc-prefs2_submit w-button">Save preferences</a>
			</div>
		</div>
	);
}
