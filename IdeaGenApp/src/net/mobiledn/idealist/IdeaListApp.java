package net.mobiledn.idealist;

import org.apache.cordova.DroidGap;

import android.os.Bundle;
import android.util.Log;
import android.webkit.WebChromeClient;

public class IdeaListApp extends DroidGap {
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		Log.d("MyApplication",
				"SDK:"
						+ android.os.Build.VERSION.SDK_INT
						+ ", "
						+ android.os.Build.VERSION_CODES.HONEYCOMB
						+ ", "
						+ (android.os.Build.VERSION.SDK_INT < android.os.Build.VERSION_CODES.HONEYCOMB));

		super.init();
		super.loadUrl("file:///android_asset/www/index.html");
		super.appView.setWebChromeClient(new WebChromeClient() {
			public void onConsoleMessage(String message, int lineNumber,
					String sourceID) {
				Log.d("MyApplication", message + " -- From line " + lineNumber
						+ " of " + sourceID);
				// return true;
			}
		});

		// Log.d("abc", super.ap)
	}
}
