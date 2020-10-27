package com.joshmorony.plugins.alert;

import android.app.AlertDialog;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class Alert extends Plugin {

    @PluginMethod
    public void present(PluginCall call) {
        String message = call.getString("message");

        AlertDialog.Builder builder = new AlertDialog.Builder(this.bridge.getWebView().getContext());
        builder.setMessage(message).setTitle("Alert");

        AlertDialog dialog = builder.create();

        dialog.show();

    }
}
